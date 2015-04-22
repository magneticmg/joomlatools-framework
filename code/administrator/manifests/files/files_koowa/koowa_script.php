<?php
/**
 * Nooku Framework - http://nooku.org/framework
 *
 * @copyright   Copyright (C) 2007 - 2014 Johan Janssens and Timble CVBA. (http://www.timble.net)
 * @license     GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link        https://github.com/nooku/nooku-framework for the canonical source repository
 */

/**
 * See the file at the parent directory with the same name for a detailed explanation as to what this class is about.
 *
 * @author Ercan Ozkaya <https://github.com/ercanozkaya>
 */
class koowaInstallerScript
{
    public function postflight($type, $installer)
    {
        $vendor_path = JPATH_ROOT.'/vendor';

        if(file_exists(JPATH_ROOT.'/composer.json'))
        {
            $content  = file_get_contents(JPATH_ROOT.'/composer.json');
            $composer = json_decode($content);

            if(isset($composer->config->{'vendor-dir'})) {
                $vendor_path = JPATH_ROOT.'/'.$composer->config->{'vendor-dir'};
            }
        }

        $source      = $vendor_path.'/nooku/nooku-framework/code/resources/assets';
        $destination = JPATH_ROOT.'/media/koowa/framework';

        if (JFolder::exists($source))
        {
            if (JFolder::exists($destination)) {
                JFolder::delete($destination);
            }

            JFolder::copy($source, $destination);
        }
    }

    public function uninstall($installer)
    {
        $xml = $installer->manifest;

        // Joomla does not delete non-empty folders so we need to clear them ourselves
        foreach ($xml->fileset->files->folder as $folder)
        {
            $target = (string) $folder->attributes()->target;

            if (!$target) {
                continue;
            }

            $target = JPATH_ROOT.'/'.$target;

            if (JFolder::exists($target)) {
                JFolder::delete($target);
            }
        }

        // Unset the files element since we handled the delete ourselves
        unset($installer->manifest->fileset->files);
    }
}

if (!class_exists('files_koowaInstallerScript')) {
    class files_koowaInstallerScript extends koowaInstallerScript {}
}
