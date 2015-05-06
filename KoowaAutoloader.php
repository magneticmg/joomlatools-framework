<?php
class KoowaAutoloader
{
    public function registerAutoloader($autoloader)
    {
        if (!defined('KOOWA')) {
            $this->loadFramework();
        }

        $autoloader();
    }

    public function loadFramework()
    {
        require_once dirname(__FILE__).DIRECTORY_SEPARATOR.'autoload.php';
    }
}