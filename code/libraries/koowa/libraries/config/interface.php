<?php
/**
 * Koowa Framework - http://developer.joomlatools.com/koowa
 *
 * @copyright	Copyright (C) 2007 - 2013 Johan Janssens and Timble CVBA. (http://www.timble.net)
 * @license		GNU GPLv3 <http://www.gnu.org/licenses/gpl.html>
 * @link		http://github.com/joomlatools/koowa for the canonical source repository
 */

/**
 * Config Interface
 *
 * KConfig provides a property based interface to an array
 *
 * @author  Johan Janssens <https://github.com/johanjanssens>
 * @package Koowa\Library\Config
 */
interface KConfigInterface extends IteratorAggregate, ArrayAccess, Countable
{
    /**
     * Retrieve a configuration item and return $default if there is no element set.
     *
     * @param string
     * @param mixed
     * @return mixed
     */
    public function get($name, $default = null);

    /**
     * Append values
     *
     * This function only adds keys that don't exist and it filters out any duplicate values
     *
     * @param  mixed    $config A value of an or array of values to be appended
     * @return KConfig
     */
    public function append($config);

    /**
     * Return the data
     *
     * If the data being passed is an instance of KConfig the data will be transformed
     * to an associative array.
     *
     * @param mixed|KConfig $data
     * @return mixed|array
     */
    public static function unbox($data);

    /**
     * Return an associative array of the config data.
     *
     * @return array
     */
    public function toArray();

 	/**
     * Returns a string with the encapsulated data in JSON format
     *
     * @return string   returns the data encoded to JSON
     */
    public function toJson();
}