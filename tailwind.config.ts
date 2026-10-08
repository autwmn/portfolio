import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',

      sage: {
        50: '#F2F3EE',
        100: '#E6E8DF',
        200: '#D4D7C9',
        300: '#BEC2B1',
        400: '#A4A894',
        500: '#969A85',
        600: '#8E907C',
        700: '#767963',
        800: '#616757',
        900: '#3F4438',
      },

      cream: {
        50: '#F5F1E8',
        100: '#F0EBDF',
        200: '#EBE5D8',
        300: '#E2DACA',
        400: '#D6CDBD',
        500: '#C7BCA8',
        600: '#B5A891',
        700: '#9C8E77',
        800: '#7C7160',
        900: '#5C5447',
      },
      ink: {
        DEFAULT: '#302F2B',
        light: '#4A4842',
        soft: '#6B685F',
      },
    },
    fontFamily: {

      display: ['"Cormorant Garamond"', 'Garamond', 'serif'],

      fashion: ['"Bodoni Moda"', '"Cormorant Garamond"', 'serif'],

      sans: ['"DM Sans"', 'system-ui', 'sans-serif'],

      hand: ['Caveat', 'cursive'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],

      serif: ['"Cormorant Garamond"', 'Garamond', 'serif'],
    },
    extend: {
      letterSpacing: {
        label: '0.16em',
        wide2: '0.22em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

export default config
