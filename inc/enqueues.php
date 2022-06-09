<?php

/**
 * Add clicky analytics.
 *
 * @return void
 */
if (!function_exists('fd_analytics')) :
    function fd_analytics()
    {
        ?>
            <script>var clicky_site_ids = clicky_site_ids || [];clicky_site_ids.push(101347445);</script>
            <script async src='//static.getclicky.com/js'></script>
            <noscript><p><img alt='Clicky' width='1' height='1' src='//in.getclicky.com/101347445ns.gif'/></p></noscript>
        <?php
    }

    add_action('wp_head', 'fd_analytics');

endif;

/**
 * Removing wp-emoji extra unnecessary loading.
 *
 * @since 0.0.3
 */
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
