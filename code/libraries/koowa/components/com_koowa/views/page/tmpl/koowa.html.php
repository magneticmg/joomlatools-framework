<?php
/**
 * Koowa Framework - http://developer.joomlatools.com/koowa
 *
 * @copyright	Copyright (C) 2007 - 2013 Johan Janssens and Timble CVBA. (http://www.timble.net)
 * @license		GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link		http://github.com/joomlatools/koowa for the canonical source repository
 */

defined('KOOWA') or die; ?>

<!DOCTYPE html>
<html class="koowa-html" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <base href="<?= @url(); ?>" />
    <title><?= @title() ?></title>

    <meta content="text/html; charset=utf-8" http-equiv="content-type"  />
    <meta content="chrome=1" http-equiv="X-UA-Compatible" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <style src="media://koowa/com_koowa/css/bootstrap.min.css" type="text/css" />

    <ktml:title>
    <ktml:meta>
    <ktml:link>
    <ktml:style>
    <ktml:script>
</head>
<body class="koowa koowa_template">

<!--[if lte IE 8 ]>
<div class="old-ie">
<![endif]-->

<div class="koowa_template_container">
    <ktml:content>
</div>

<!--[if lte IE 8 ]>
</div>
<![endif]-->

</body>
</html>