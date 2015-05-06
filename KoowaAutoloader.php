<?php
class KoowaAutoloader
{
    public function registerComponent($name, $path, $domain = 'nooku')
    {
        if (!defined('KOOWA')) {
            $this->loadFramework();
        }

        KObjectManager::getInstance()
            ->getObject('lib:object.bootstrapper')
            ->registerComponent(
                $name,
                $path,
                $domain
            );
    }

    public function loadFramework()
    {
        require_once dirname(__FILE__).DIRECTORY_SEPARATOR.'autoload.php';
    }
}