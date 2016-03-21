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
}