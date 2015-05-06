<?php
/**
 * KoowaAutoloader helper class
 *
 * Reusable components installed with Composer should
 * invoke the bootstrap() method before registering themselves.
 * This makes sure that all required classes will always be available.
 *
 * @author  Steven Rombauts <https://github.com/stevenrombauts>
 */
class KoowaAutoloader
{
    /**
     * Koowa Bootstrapping
     *
     * If KOOWA is defined assume it was already loaded and bootstrapped
     */
    public function bootstrap()
    {
        if (!defined('KOOWA'))
        {
            /**
             * Joomla Configuration
             */
            require_once JPATH_CONFIGURATION . '/configuration.php';
            $config = new JConfig;

            /**
             * Joomla Version
             */
            require_once JPATH_LIBRARIES . '/cms/version/version.php';
            $version = new JVersion;

            /**
             * Framework Bootstrapping
             */
            require_once __DIR__.'/../nooku-framework/code/koowa.php';
            Koowa::getInstance(array(
                'debug'           => $config->debug,
                'cache'           => false, //config->caching
                'cache_namespace' => 'koowa-' . JPATH_BASE === JPATH_SITE ? 'site' : 'admin' . '-' . md5($config->secret),
                'root_path'       => JPATH_ROOT,
                'base_path'       => JPATH_BASE,
                'vendor_path'     => false //Composer loader is already registered.
            ));

            /**
             * Component Bootstrapping
             */
            KObjectManager::getInstance()->getObject('object.bootstrapper')
                ->registerComponents(JPATH_LIBRARIES.'/koowa/components', 'koowa')
                ->registerApplication('site', JPATH_SITE . '/components', JPATH_BASE === JPATH_SITE)
                ->registerApplication('admin', JPATH_ADMINISTRATOR . '/components', JPATH_BASE == JPATH_ADMINISTRATOR)
                ->bootstrap();
        }
    }
}