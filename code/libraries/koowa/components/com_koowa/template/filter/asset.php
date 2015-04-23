<?php
/**
 * Nooku Framework - http://nooku.org/framework
 *
 * @copyright   Copyright (C) 2007 - 2014 Johan Janssens and Timble CVBA. (http://www.timble.net)
 * @license     GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link        https://github.com/nooku/nooku-framework for the canonical source repository
 */

/**
 * Url Template Filter
 *
 * Filter allows to create url schemes that are replaced on compile and render.
 *
 * @author  Johan Janssens <https://github.com/johanjanssens>
 * @package Koowa\Component\Koowa\Template\Filter
 */
class ComKoowaTemplateFilterAsset extends KTemplateFilterAsset
{
    /**
     * Initializes the options for the object
     *
     * Called from {@link __construct()} as a first step of object instantiation.
     *
     * @param   KObjectConfig $config Configuration options
     * @return  void
     */
    protected function _initialize(KObjectConfig $config)
    {
        $path       = rtrim($this->getObject('request')->getSiteUrl()->getPath(), '/');
        $nooku_path = $path.'/media/koowa/framework';

        $config->append(array(
            'schemes' => array(
                'media://js'  => $nooku_path.'/js',
                'media://css' => $nooku_path.'/css',
                'media://img' => $nooku_path.'/img',
                'media://' => $path.'/media/',
                'root://'  => $path.'/',
                'base://'  => rtrim($this->getObject('request')->getBaseUrl()->getPath(), '/').'/',
            ),
        ));

        parent::_initialize($config);
    }
}