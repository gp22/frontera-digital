<?php

/**
 * Register custom post types.
 */

function wf_custom_post_type() {
  register_post_type('testimonial', [
    'labels' => [
        'name' => __('Testimonial'),
        'singular_name' => __('Testimonial'),
        'add_new' => __('Add New Testimonial'),
        'add_new_item' => __('Add Testimonial'),
        'edit' => __('Edit'),
        'edit_item' => __('Edit Testimonial'),
        'new_item' => __('New Testimonial'),
        'view' => __('View Testimonial'),
        'view_item' => __('View Testimonial'),
        'search_items' => __('Search Testimonial\'s'),
        'not_found' => __('No Testimonial\'s found'),
        'not_found_in_trash' => __('No Testimonial\'s found in trash')
    ],
    'public' => true,
    'hierarchical' => true,
    'has_archive' => false,
    'show_in_rest' => true,
    'supports' => [
        'title',
        'revisions',
        'author',
        'editor'
    ],
    'can_export' => true,
    'menu_position' => 6,
    'menu_icon' => 'dashicons-edit-large',
    'exclude_from_search' => true,
    'rewrite' => [
        'slug' => 'testimonial',
        'with_front' => false,
        'hierarchical' => true
    ]
  ]);
}
add_action('init', 'wf_custom_post_type');
