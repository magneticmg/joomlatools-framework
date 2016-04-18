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
            'folder' => 'com_'.$identifier->package,
            'file'   => ($identifier->type === 'mod' ? 'module' : $identifier->domain) ?: 'admin',
            'media_path' => JPATH_ROOT.'/media'
        ));

        $html = '';
        $path = sprintf('%s/%s/css/%s.css', $config->media_path, $config->folder, $config->file);

        if (!file_exists($path))
        {
            if ($config->file === 'module') {
                $config->css_file = false;
            } else {
                $config->folder = 'koowa';
            }
        }

        $app = JFactory::getApplication();
        $tmpl = $this->getObject('request')->getQuery()->tmpl;
        if ($app->isAdmin() && $config->file === 'admin' && (empty($tmpl) || $tmpl === 'index'))
        {
            $template = $app->getTemplate();

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

        if ($config->javascript && empty(static::$_loaded['bootstrap-javascript']))
        {
            $html .= $this->getTemplate()->helper('behavior.jquery', $config->toArray());

            JHtml::_('bootstrap.framework');

            static::$_loaded['bootstrap-javascript'] = true;

            $config->javascript = false;
        }

        $template = JPATH_THEMES.'/'.JFactory::getApplication()->getTemplate();

        if (file_exists($template.'/enable-koowa-bootstrap.txt')) {
            $html .= parent::bootstrap($config);
        }

        return $html;
    }
}
