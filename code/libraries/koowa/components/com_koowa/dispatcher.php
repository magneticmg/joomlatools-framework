<?php
/**
 * Koowa Framework - http://developer.joomlatools.com/koowa
 *
 * @copyright	Copyright (C) 2007 - 2013 Johan Janssens and Timble CVBA. (http://www.timble.net)
 * @license		GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link		http://github.com/joomlatools/koowa for the canonical source repository
 */

/**
 * Dispatcher
 *
 * @author  Johan Janssens <https://github.com/johanjanssens>
 * @package Koowa\Component\Koowa
 */
class ComKoowaDispatcher extends KDispatcherDefault implements KObjectInstantiable
{
 	/**
     * Initializes the options for the object
     *
     * Called from {@link __construct()} as a first step of object instantiation.
     *
     * @param   KObjectConfig $config Configuration options.
     * @return  void
     */
    protected function _initialize(KObjectConfig $config)
    {
        /*
         * Joomla 3.x Compat
         *
         * Re-run the routing and add returned keys to the $_GET request
         * This is done because Joomla 3 sets the results of the router in $_REQUEST and not in $_GET
         */
        $app = JFactory::getApplication();
        if ($app->isSite() && $app->getCfg('sef'))
        {
            $uri = clone JURI::getInstance();

            $router = JFactory::getApplication()->getRouter();
            $result = $router->parse($uri);

            foreach ($result as $key => $value)
            {
                if (!KRequest::has('get.'.$key)) {
                    KRequest::set('get.'.$key, $value);
                }
            }
        }

        parent::_initialize($config);

        //Force the controller to the information found in the request
        if($config->request->view) {
            $config->controller = $config->request->view;
        }
    }

	/**
     * Force creation of a singleton
     *
     * @param   KObjectConfigInterface $config        Configuration options
     * @param 	KObjectManagerInterface $manager	A KObjectManagerInterface object
     * @return KDispatcherDefault
     */
    public static function getInstance(KObjectConfigInterface $config, KObjectManagerInterface $manager)
    {
       // Check if an instance with this identifier already exists or not
        if (!$manager->isRegistered($config->object_identifier))
        {
            //Create the singleton
            $classname = $config->object_identifier->classname;
            $instance  = new $classname($config);
            $manager->setObject($config->object_identifier, $instance);

            //Add the factory map to allow easy access to the singleton
            $manager->registerAlias('dispatcher', $config->object_identifier);
        }

        return $manager->getObject($config->object_identifier);
    }

    /**
     * Dispatch the controller and redirect
     *
     * This function divert the standard behavior and will redirect if no view information can be found in the request.
     *
     * @param   KCommand	$context A command context object
     * @return  ComKoowaDispatcher
     */
    protected function _actionDispatch(KCommand $context)
    {
        //Redirect if no view information can be found in the request
        if(!KRequest::has('get.view'))
        {
            $url = clone(KRequest::url());
            $url->query['view'] = $this->getController()->getView()->getName();

            JFactory::getApplication()->redirect($url);
        }

        return parent::_actionDispatch($context);
    }

    /**
     * Push the controller data into the document
     *
     * This function divert the standard behavior and will push specific controller data into the document
     *
     * @param   KCommand	$context A command context object
     * @return  ComKoowaDispatcher
     */
    protected function _actionRender(KCommand $context)
    {
        $view  = $this->getController()->getView();

        JFactory::getDocument()->setMimeEncoding($view->mimetype);

        //Disabled the application menubar
        if($this->getIdentifier()->application === 'admin' && $this->getController()->isEditable() && KStringInflector::isSingular($view->getName())) {
            KRequest::set('get.hidemainmenu', 1);
        }

        return parent::_actionRender($context);
    }
}
