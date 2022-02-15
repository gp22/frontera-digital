<?php

/**
 * Set theme version to global variable.
 * @package vibe
 * @since 0.0.1
 */
define( 'VERSION', wp_get_theme()->get( 'Version' ) );

// Enqueue stylesheets
require_once 'inc/enqueues.php';

// Register post types
//require_once 'inc/post-types.php';
