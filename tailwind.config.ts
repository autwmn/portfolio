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
      // Muted sage — the dominant family
      sage: {
        50: '#F2F3EE',
        100: '#E6E8DF',
        200: '#D4D7C9',
        300: '#BEC2B1',
        400: '#A4A894', // Muted Sage
        500: '#969A85',
        600: '#8E907C', // Dusty Olive
        700: '#767963',
        800: '#616757', // Deep Sage
        900: '#3F4438',
      },
      // Warm paper tones
      cream: {
        50: '#F5F1E8', // Warm Ivory
        100: '#F0EBDF',
        200: '#EBE5D8', // Soft Cream
        300: '#E2DACA',
        400: '#D6CDBD', // Dusty taupe
        500: '#C7BCA8',
        600: '#B5A891',
        700: '#9C8E77',
        800: '#7C7160',
        900: '#5C5447',
      },
      ink: {
        DEFAULT: '#302F2B', // Warm Charcoal
        light: '#4A4842',
        soft: '#6B685F',
      },
    },
    fontFamily: {
      // Editorial display — Cormorant Garamond 300/400
      display: ['"Cormorant Garamond"', 'Garamond', 'serif'],
      // High-fashion accent — used sparingly
      fashion: ['"Bodoni Moda"', '"Cormorant Garamond"', 'serif'],
      // Body / UI
      sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      // Annotations only
      hand: ['Caveat', 'cursive'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      // legacy alias so untouched sections keep rendering
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
