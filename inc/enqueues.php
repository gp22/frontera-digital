<?php
/**
 * Enqueue Styles for theme front end.
 *
 * @package thefronteraagency
 * @since 0.0.1
 */
if (!function_exists('wf_styles')) :

    /**
     * Enqueue Styles.
     *
     * @return void
     */
    function wf_styles()
    {

        // Register theme stylesheet
        wp_register_style(
            'wf-style',
            get_theme_file_uri('assets/css/style.css'),
            array(),
            VERSION
        );

        // Add styles inline.
        wp_add_inline_style('wf-style', wf_get_font_face_styles());

        // Enqueue theme stylesheet
        wp_enqueue_style('wf-style');
    }

    add_action('wp_enqueue_scripts', 'wf_styles');

endif;

if (!function_exists('wf_editor_styles')) :

    /**
     * Enqueue editor styles.
     *
     * @return void
     */
    function wf_editor_styles()
    {

        // Add styles inline.
        wp_add_inline_style('wp-block-library', wf_get_font_face_styles());
    }

    add_action('admin_init', 'wf_editor_styles');

endif;

if (!function_exists('wf_get_font_face_styles')) :

    /**
     * Get font face styles.
     * Called by wf_styles() & wf_editor_styles().
     *
     * @return string
     */
    function wf_get_font_face_styles(): string
    {

        return "
        @font-face {
          font-family: 'Poppins';
          font-weight: 400;
          font-style: normal;
          font-stretch: normal;
          src: url('" . get_theme_file_uri('assets/fonts/Poppins-Regular.woff2') . "') format('woff2');
          font-display: swap;
        }

        @font-face {
          font-family: 'Poppins';
          font-weight: 400;
          font-style: italic;
          font-stretch: normal;
          src: url('" . get_theme_file_uri('assets/fonts/Poppins-Italic.woff2') . "') format('woff2');
          font-display: swap;
        }

        @font-face {
          font-family: 'Poppins';
          font-weight: 700;
          font-style: normal;
          font-stretch: normal;
          src: url('" . get_theme_file_uri('assets/fonts/Poppins-Bold.woff2') . "') format('woff2');
          font-display: swap;
        }

        @font-face {
          font-family: 'Poppins';
          font-weight: 700;
          font-style: italic;
          font-stretch: normal;
          src: url('" . get_theme_file_uri('assets/fonts/Poppins-BoldItalic.woff2') . "') format('woff2');
          font-display: swap;
        }
      ";
    }
endif;

if (!function_exists('wf_analytics')) :

    /**
     * Add clicky analytics.
     *
     * @return void
     */
    function wf_analytics()
    {
        ?>
            <script>var clicky_site_ids = clicky_site_ids || [];clicky_site_ids.push(101347445);</script>
            <script async src='//static.getclicky.com/js'></script>
            <noscript><p><img alt='Clicky' width='1' height='1' src='//in.getclicky.com/101347445ns.gif'/></p></noscript>
        <?php
    }

    add_action('wp_head', 'wf_analytics');

endif;

/**
 * Removing wp-emoji extra unnecessary loading.
 *
 * @since 0.0.3
 */
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
