import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "Pale-blue": "hsl(225, 100%, 94%)",
        "Bright-blue": "hsl(245, 75%, 52%)",

        "Very-pale-blue": "hsl(225, 100%, 98%)",
        "Desaturated-blue": "hsl(224, 23%, 55%)",
        "Dark-blue": "hsl(223, 47%, 23%)"
      }
    },
  },
  plugins: [],
}
export default config
