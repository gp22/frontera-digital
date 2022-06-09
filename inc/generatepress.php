<?php

/**
 * Disable loading child theme stylesheet
 */
add_filter('generate_load_child_theme_stylesheet', '__return_false');

/**
 * Load the generated stylesheet
 */
add_filter('generate_load_child_theme_stylesheet', function () {

    wp_enqueue_style(
        'fd-generated-stylesheet',
        get_stylesheet_directory_uri() . '/assets/css/style.css',
        false,
        filemtime(get_stylesheet_directory() . '/assets/css/style.css'),
        'all'
    );

});
