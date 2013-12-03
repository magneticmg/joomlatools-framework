<?php
/**
 * Koowa Framework - http://developer.joomlatools.com/koowa
 *
 * @copyright	Copyright (C) 2007 - 2013 Johan Janssens and Timble CVBA. (http://www.timble.net)
 * @license		GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link		http://github.com/joomlatools/koowa for the canonical source repository
 */

/**
 * Editable Controller Behavior
 *
 * @author  Johan Janssens <https://github.com/johanjanssens>
 * @package Koowa\Library\Controller
 */
class ComKoowaControllerBehaviorEditable extends KControllerBehaviorEditable
{
    /**
     * Saves the current row and redirects to a new edit form
     *
     * @param KControllerContextInterface $context
     * @return KDatabaseRowInterface A row object containing the saved data
     */
    protected function _actionSave2new(KControllerContextInterface $context)
    {
        // Cache and lock the referrer since _ActionSave would unset it
        $referrer = $this->getReferrer();
        $this->lockReferrer();

        $entity = $this->save($context);

        // Re-set the referrer
        KRequest::set('cookie.referrer', (string) $referrer);

        $identifier = $this->getMixer()->getIdentifier();
        $view       = KStringInflector::singularize($identifier->name);
        $url        = sprintf('index.php?option=com_%s&view=%s', $identifier->package, $view);

        $this->setRedirect($this->getObject('koowa:http.url',array('url' => $url)));

        return $entity;
    }

    /**
     * Add a lock flash message if the resource is locked
     *
     * @param   KControllerContext	$context A command context object
     * @return 	void
     */
    protected function _afterRead(KControllerContext $context)
    {
        $entity = $context->result;

        //Add the notice if the resource is locked
        if($this->canEdit() && $entity->isLockable() && $entity->locked())
        {
            //Prevent a re-render of the message
            if($context->request->getUrl() != $context->request->getReferrer())
            {
                $message = $this->getObject('com:koowa.template.helper.message')->lock(array('row' => $entity));
                $context->response->addMessage($message, 'notice');
            }
        }
    }
}