// Type scale: https://utopia.fyi/type/calculator?c=320,17,1.125,1140,17,1.25,6,1,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l
module.exports = {
  content: ['./**/*.php'],
  theme: {
    extend: {
      colors: {
        black: '#313245',
        gray: '#73769c',
        headings: '#1c1c27',
        primary: '#0e1ecc',
        'primary-dark': '#04093d',
        'primary-light': '#3e4bd6',
        'primary-lighter': '#f1f2fe',
        secondary: '#0e7f6f',
        'secondary-light': '#f4fefc',
        white: '#ffffff',
      },
      fontFamily: {
        body: 'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      fontSize: {
        xs: 'clamp(0.89rem, 0.96rem + -0.36vw, 0.70rem)',
        sm: 'clamp(1.00rem, 1.02rem + -0.12vw, 0.94rem)',
        base: 'clamp(1.13rem, 1.08rem + 0.24vw, 1.25rem)',
        md: 'clamp(1.27rem, 1.11rem + 0.78vw, 1.67rem)',
        lg: 'clamp(1.42rem, 1.11rem + 1.56vw, 2.22rem)',
        xl: 'clamp(1.60rem, 1.07rem + 2.65vw, 2.96rem)',
        '2xl': 'clamp(1.80rem, 0.96rem + 4.19vw, 3.95rem)',
        '3xl': 'clamp(2.03rem, 0.77rem + 6.31vw, 5.26rem)'
      },
    },
  },
  plugins: []
};
