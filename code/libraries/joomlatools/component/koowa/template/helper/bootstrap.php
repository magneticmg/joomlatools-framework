<?php
/**
 * Nooku Framework - http://nooku.org/framework
 *
 * @copyright   Copyright (C) 2007 - 2014 Johan Janssens and Timble CVBA. (http://www.timble.net)
 * @license     GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link        https://github.com/nooku/nooku-framework for the canonical source repository
 */

/**
 * Bootstrap Template Helper
 *
 * @author  Johan Janssens <https://github.com/johanjanssens>
 * @package Koowa\Component\Koowa\Template\Helper
 */
class ComKoowaTemplateHelperBootstrap extends ComKoowaTemplateHelperBehavior
{
    /**
     * Load Bootstrap JavaScript files, from Joomla if possible
     *
     * @param array|KObjectConfig $config
     * @return string
     */
    public function javascript($config = array())
    {
        return $this->getTemplate()->helper('behavior.bootstrap', array(
            'debug' => JFactory::getApplication()->getCfg('debug'),
            'css' => false,
            'javascript' => true
        ));
    }

    /**
     * Loads necessary Bootstrap files
     *
     * @param array|KObjectConfig $config
     * @return string
     */
    public function load($config = array())
    {
        return $this->getTemplate()->helper('ui.load', $config);
    }

    /**
     * Wrap the output of the template with a filter
     *
     * @param array|KObjectConfig $config
     */
    public function wrapper($config = array())
    {
        return $this->getTemplate()->helper('ui.wrapper', $config);
    }
}
