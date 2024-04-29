import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      'light-blue': '#98c1d9',
      'dark-blue': '#3d5a80',
      'white-blue': '#E0FBFC',
      'special-red': '#EE6C4D',
      'special-black': '#293241'
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.rainbow-border': {
          animation: 'spin 2.5s infinite linear',
          background: `linear-gradient(to bottom, #98c1d9, #98c1d9) padding-box,
          conic-gradient(
              from var(--bg-angle) in oklch longer hue,
              oklch(0.85 0.37 0) 0 0
            )
            border-box`,
          border: '3px solid transparent'
        },
        '.dark-rainbow-border': {
          animation: 'spin 2.5s infinite linear',
          background: `linear-gradient(to bottom, #293241, #293241) padding-box,
          conic-gradient(
              from var(--bg-angle) in oklch longer hue,
              oklch(0.85 0.37 0) 0 0
            )
            border-box`,
          border: '3px solid transparent'
        }
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ]
};
export default config;
