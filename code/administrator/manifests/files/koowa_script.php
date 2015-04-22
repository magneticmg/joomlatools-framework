<?php
/**
 * Nooku Framework - http://nooku.org/framework
 *
 * @copyright   Copyright (C) 2007 - 2014 Johan Janssens and Timble CVBA. (http://www.timble.net)
 * @license     GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link        https://github.com/nooku/nooku-framework for the canonical source repository
 */

/**
 * Dear developer,
 *
 * If you have made it here, there is a good chance that you have been dealing with the Joomla installer for hours.
 * I know how you feel right now so here is a cat video to cheer you up:
 * https://www.youtube.com/watch?v=_ZSbC09qgLI
 *
 * I hope you are feeling better now, anyway, so here is what this class is about:
 * koowaInstallerScript: this is used by Joomla 3.4+ as the class name
 * files_koowaInstallerScript: this is used by Joomla 2.5 as the class name (defined at the end of this file)
 *
 * You probably have noticed that there is an exact duplicate of this file at files_koowa/koowa_script.php
 * That is because this file is used during install while the other one is for uninstall.
 *
 * If this makes you depressed, here is another cat video to make you feel better:
 * https://www.youtube.com/watch?v=HECa3bAFAYk
 *
 * I wish you all the best.
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
