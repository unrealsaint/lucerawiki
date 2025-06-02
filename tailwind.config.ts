import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: '500',
            },
            strong: {
              color: 'inherit',
            },
            code: {
              color: 'inherit',
            },
            h1: {
              color: 'inherit',
            },
            h2: {
              color: 'inherit',
            },
            h3: {
              color: 'inherit',
            },
            h4: {
              color: 'inherit',
            },
            blockquote: {
              color: 'inherit',
            },
            pre: {
              backgroundColor: 'rgb(31, 41, 55)',
              color: 'inherit',
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
            },
            thead: {
              color: 'inherit',
              borderBottomColor: 'rgb(75, 85, 99)',
            },
            'tbody tr': {
              borderBottomColor: 'rgb(31, 41, 55)',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config 