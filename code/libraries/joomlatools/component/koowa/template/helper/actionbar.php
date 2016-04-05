<?php
/**
 * Nooku Framework - http://nooku.org/framework
 *
 * @copyright   Copyright (C) 2007 - 2014 Johan Janssens and Timble CVBA. (http://www.timble.net)
 * @license     GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link        https://github.com/nooku/nooku-framework for the canonical source repository
 */

/**
 * Action bar Template Helper
 *
 * @author  Johan Janssens <https://github.com/johanjanssens>
 * @package Koowa\Component\Koowa\Template\Helper
 */
class ComKoowaTemplateHelperActionbar extends KTemplateHelperActionbar
{
    /**
     * Render the action bar commands
     *
     * @param   array   $config An optional array with configuration options
     * @return  string  Html
     */
    public function render($config = array())
    {
        // Load the language strings for toolbar button labels
        JFactory::getLanguage()->load('joomla', JPATH_ADMINISTRATOR);

        return parent::render($config);
    }

    /**
     * Render the action bar title
     *
     * @param   array   $config An optional array with configuration options
     * @return  string  Html
     */
    public function title($config = array())
    {
        $config = new KObjectConfigJson($config);
        $config->append(array(
            'command' => NULL,
        ));

        $title = $this->getObject('translator')->translate($config->command->title);
        $icon  = $config->command->icon;
        $html  = '';

        if (!empty($title))
        {
            $html = '<div class="k-heading">' . $title . '</div>';

            if (JFactory::getApplication()->isAdmin())
            {
                $app = JFactory::getApplication();
                $app->JComponentTitle = $html;

                //$html = '';

                JFactory::getDocument()->setTitle($app->getCfg('sitename') . ' - ' . JText::_('JADMINISTRATION') . ' - ' . $title);
            }
        }

        return $html;
    }

    /**
     * Render an options button
     *
     * @param array|KObjectConfig $config
     * @return string
     */
    public function options($config = array())
    {
        return $this->dialog($config);
    }

    /**
     * Render a modal button
     *
     * @param   array   $config An optional array with configuration options
     * @return  string  Html
     */
    public function dialog($config = array())
    {
        JHtml::_('behavior.modal');

        return parent::dialog($config);
    }

    /**
     * Decides if Bootstrap buttons should use icons
     *
     * @return bool
     */
    protected function _useIcons()
    {
        return JFactory::getApplication()->isAdmin();
    }
}
