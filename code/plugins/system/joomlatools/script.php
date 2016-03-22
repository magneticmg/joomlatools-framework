<?php
/**
 * Nooku Framework - http://nooku.org/framework
 *
 * @copyright   Copyright (C) 2007 - 2014 Johan Janssens and Timble CVBA. (http://www.timble.net)
 * @license     GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link        https://github.com/nooku/nooku-framework for the canonical source repository
 */

class PlgSystemJoomlatoolsInstallerScript
{
    public function preflight($type, $installer)
    {
        if ($errors = $this->getServerErrors())
        {
            ob_start();
            echo JText::_("The installation cannot proceed until you resolve the following issues: ");
            echo implode(',', $errors);

            $error = ob_get_clean();
            JFactory::getApplication()->enqueueMessage($error, 'error');

            return false;
        }

        return true;
    }

    public function postflight($type, $installer)
    {
        if ($type !== 'discover_install')
        {
            $source = $installer->getParent()->getPath('source');

            if (!$this->_moveFolder($source.'/libraries/joomlatools', JPATH_LIBRARIES.'/joomlatools')) {
                $warning = 'Could not create the libraries folder';
                JFactory::getApplication()->enqueueMessage($warning, 'warning');

                return false;
            }

            // Create media folder
            $media = JPATH_ROOT.'/media/koowa';

            if (!JFolder::exists($media)) {
                JFolder::create($media);
            }

            // Move component assets
            $results = glob(JPATH_LIBRARIES . '/joomlatools/component/*/resources/assets', GLOB_ONLYDIR);

            foreach ($results as $result)
            {
                $component = preg_replace('#^.*?component/([^/]+)/resources/assets#', '$1', $result);
                $target    = $media.'/com_'.$component;

                if (!$component || is_link($target)) {
                    continue;
                }

                $this->_moveFolder($result, $target);

            }
        }

        $this->_runQueries();

        $this->_clearCache();

        // Enable plugin
        $query = sprintf("UPDATE #__extensions SET enabled = 1 WHERE type = '%s' AND element = '%s' AND folder = '%s'",
            'plugin', 'joomlatools', 'system'
        );

        JFactory::getDbo()->setQuery($query)->query();

        return true;
    }

    protected function _clearCache()
    {
        // Joomla does not clean up its plugins cache for us
        JCache::getInstance('callback', array(
            'defaultgroup' => 'com_plugins',
            'cachebase'    => JPATH_ADMINISTRATOR . '/cache'
        ))->clean();

        JFactory::getCache('com_koowa.tables', 'output')->clean();
        JFactory::getCache('com_koowa.templates', 'output')->clean();

        // Clear APC opcode cache
        if (extension_loaded('apc'))
        {
            apc_clear_cache();
            apc_clear_cache('user');
        }
    }

    protected function _moveFolder($from, $to)
    {
        $temp   = $to.'_tmp';
        $result = false;

        if (JFolder::exists($temp)) {
            if (!JFolder::delete($temp) || JFolder::exists($temp)) {
                return $result;
            }
        }

        if (JFolder::copy($from, $temp))
        {
            if (JFolder::exists($to)) {
                if (!JFolder::delete($to) || JFolder::exists($to)) {
                    return $result;
                }
            }

            $result = JFolder::move($temp, $to);
        }

        return $result;
    }

    public function uninstall($installer)
    {
        $folders = array(
            JPATH_LIBRARIES.'/joomlatools',
            JPATH_ROOT.'/media/koowa'
        );

        foreach ($folders as $folder) {
            if (JFolder::exists($folder)) {
                JFolder::delete($folder);
            }
        }
    }

    protected function _runQueries()
    {
        $results = glob(JPATH_LIBRARIES . '/joomlatools/component/*/resources/install/install.sql');
        $queries = array();

        $db = JFactory::getDbo();

        foreach ($results as $result) {
            if ($q = $db->splitSql(file_get_contents($result))) {
                $queries = array_merge($queries, $q);
            }
        }

        foreach ($queries as $query) {
            $query = trim($query);

            if ($query != '' && $query{0} != '#') {
                try {
                    $db->setQuery($query)->execute();
                } catch (Exception $e) {
                }
            }
        }
    }

    public function getServerErrors()
    {
        $errors = array();

        if(version_compare(phpversion(), '5.3.9', '<'))
        {
            $errors[] = sprintf(JText::_('Your server is running PHP %s which is an old and insecure version.
            It also contains a bug affecting the operation of our extensions.
            Please contact your host and ask them to upgrade PHP to a newer version on your server.'), phpversion());
        }

        if (!function_exists('token_get_all')) {
            $errors[] = 'PHP tokenizer extension must be enabled by your host.';
        }

        if(!class_exists('mysqli')) {
            $errors[] = JText::_("We're sorry but your server isn't configured with the MySQLi database driver. Please
		    contact your host and ask them to enable MySQLi for your server.");
        }

        if(version_compare(JFactory::getDbo()->getVersion(), '5.1', '<')) {
            $errors[] = sprintf(JText::_('Joomlatools framework requires MySQL 5.1 or later.
            Please contact your host and ask them to upgrade MySQL to 5.1 or a newer version on your server.'), JFactory::getDbo()->getVersion());
        }

        $result = JFactory::getDbo()->setQuery("SELECT SUPPORT FROM INFORMATION_SCHEMA.ENGINES WHERE ENGINE = 'InnoDB'")->loadResult();
        if(!in_array(strtoupper($result), array('YES', 'DEFAULT'))) {
            $errors[] = JText::_("Joomlatools framework requires MySQL InnoDB support. Please contact your host and ask them to enable InnoDB.");
        }

        // Check a bunch of Ohanah v2 files to see if it is installed
        if (file_exists(JPATH_ADMINISTRATOR.'/components/com_ohanah/controllers/event.php')
            || file_exists(JPATH_SITE.'/components/com_ohanah/dispatcher.php')
            || file_exists(JPATH_SITE.'/components/com_ohanah/controllers/event.php'))
        {
            $errors[] = sprintf("You have an older version of Ohanah event management extension installed.
            Installing this version of Joomlatools framework now would break your site. Please upgrade Ohanah to the latest version first.
            Installation is aborting. For more information please read our detailed explanation <a target=\"_blank\" href=\"%s\">here</a>.",
                'http://www.joomlatools.com/framework-known-issues');
        }

        if (class_exists('Koowa') && (!method_exists('Koowa', 'getInstance') || version_compare(Koowa::getInstance()->getVersion(), '1', '<')))
        {
            $errors[] = sprintf(JText::_("Your site has an older version of our library already installed. Installation
			 is aborting to prevent creating conflicts with other extensions."));
        }

        //Some hosts that specialize on Joomla are known to lock permissions to the libraries folder
        if(!is_writable(JPATH_LIBRARIES))
        {
            $errors[] = sprintf(JText::_("The <em title=\"%s\">libraries</em> folder needs to be writable in order for
		    Joomlatools framework to install correctly."), JPATH_LIBRARIES);
        }

        return $errors;
    }

    /**
     * Can't use JPluginHelper here since there is no way
     * of clearing the cached list of plugins.
     *
     * @return bool
     */
    public function bootFramework()
    {
        if (class_exists('Koowa')) {
            return true;
        }

        $path = JPATH_PLUGINS.'/system/joomlatools/joomlatools.php';

        if (!file_exists($path)) {
            return false;
        }

        require_once $path;

        $dispatcher = JDispatcher::getInstance();
        $className  = 'PlgSystemJoomlatools';

        // Constructor does all the work in the plugin
        if (class_exists($className))
        {
            $db = JFactory::getDbo();
            $db->setQuery(/** @lang text */"SELECT folder AS type, element AS name, params
			 FROM #__extensions
			 WHERE folder = 'system' AND element = 'joomlatools'"
            );
            $plugin = $db->loadObject();

            new $className($dispatcher, (array) ($plugin));
        }

        return class_exists('Koowa');
    }
}