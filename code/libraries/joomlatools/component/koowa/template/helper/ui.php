<?php
/**
 * Nooku Framework - http://nooku.org/framework
 *
 * @copyright   Copyright (C) 2007 - 2014 Johan Janssens and Timble CVBA. (http://www.timble.net)
 * @license     GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link        https://github.com/nooku/nooku-framework for the canonical source repository
 */

/**
 * Behavior Template Helper
 *
 * @author  Johan Janssens <https://github.com/johanjanssens>
 * @package Koowa\Component\Koowa\Template\Helper
 */
class ComKoowaTemplateHelperUi extends KTemplateHelperUi
{
    /**
     * Loads the common UI libraries
     *
     * @param array $config
     * @return string
     */
    public function load($config = array())
    {
        $config = new KObjectConfigJson($config);
        $config->append(array(
            'debug' => JFactory::getApplication()->getCfg('debug'),
            'wrapper_class' => array(JFactory::getLanguage()->isRtl() ? 'koowa--rtl' : '')
        ));

        $html = parent::load($config);

        return $html;
    }

    public function styles($config = array())
    {
        $identifier = $this->getTemplate()->getIdentifier();

        $config = new KObjectConfigJson($config);
        $config->append(array(
            'debug' => JFactory::getApplication()->getCfg('debug'),
            'package' => $identifier->package
        ))->append(array(
            'folder' => 'com_'.$config->package,
            'file'   => ($identifier->type === 'mod' ? 'module' : $identifier->domain) ?: 'admin',
            'media_path' => JPATH_ROOT.'/media'
        ));

        $html = '';

        $app      = JFactory::getApplication();
        $template = $app->getTemplate();
        $tmpl     = $this->getObject('request')->getQuery()->tmpl;
        $layout   = $this->getObject('request')->getQuery()->layout;

        if ($app->isSite())
        {
            // Load Bootstrap file if it's explicitly asked for
            if ($tmpl !== 'koowa' && file_exists(JPATH_THEMES.'/'.$template.'/enable-koowa-bootstrap.txt')) {
                $html .= $this->bootstrap(array('javascript' => false, 'css' => true));
            }

            // Load the admin styles in frontend forms
            if ($tmpl === 'koowa' && $layout === 'form') {
                $config->file = 'admin';
            }
        }

        $path = sprintf('%s/%s/css/%s.css', $config->media_path, $config->folder, $config->file);

        if (!file_exists($path))
        {
            if ($config->file === 'module') {
                $config->css_file = false;
            } else {
                $config->folder = 'koowa';
            }
        }

        if ($app->isAdmin() && $config->file === 'admin' && (empty($tmpl) || $tmpl === 'index'))
        {
            if (file_exists(JPATH_ROOT.'/media/koowa/com_koowa/css/'.$template.'.css')) {
                $html .= '<ktml:style src="assets://koowa/css/'.$template.'.css" />';
            }
        }

        $html .= parent::styles($config);

        return $html;
    }

    /**
     * Add Bootstrap JS and CSS a modal box
     *
     * @param array|KObjectConfig $config
     * @return string   The html output
     */
    public function bootstrap($config = array())
    {
        $config = new KObjectConfigJson($config);
        $config->append(array(
            'debug' => JFactory::getApplication()->getCfg('debug'),
            'javascript' => false
        ));

        $html = '';

        if ($config->javascript && !KTemplateHelperBehavior::isLoaded('bootstrap-javascript'))
        {
            $html .= $this->getTemplate()->helper('behavior.jquery', $config->toArray());

            JHtml::_('bootstrap.framework');

            KTemplateHelperBehavior::setLoaded('bootstrap-javascript');

            $config->javascript = false;
        }

        $html .= parent::bootstrap($config);

        return $html;
    }
}
