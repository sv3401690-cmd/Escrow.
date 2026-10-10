/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', 'Roboto', 'sans-serif'],
        code: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      colors: {
        canvas: {
          DEFAULT: '#0D0B0A', // Deep obsidian smoked umber
          subtle: '#14110F',  // Secondary surface
          card: '#191512',    // Espresso container
          elevated: '#211C18',// Raised card
          border: '#2B241F',  // Warm organic hairline border
          borderLight: '#3D342C'
        },
        parchment: {
          50: '#FAF7F2',  // Crisp porcelain milk white
          100: '#F3EFE8',
          200: '#E4DDD2',
          300: '#C7BEB1',
          400: '#AFA393', // Body copy sand
          500: '#877B6C', // Muted copy
          600: '#63584B',
          700: '#473E34',
          800: '#2F2821',
          900: '#1A1612'
        },
        organic: {
          moss: '#10B981',      // Vivid forest emerald
          mossDeep: '#064E3B',  // Deep forest green
          mossSubtle: '#0F2E23',// Muted moss fill
          terracotta: '#D97706',// Warm earth amber
          rust: '#DC2626',      // Tainted rust crimson
          bronze: '#C28B53',    // Warm metallic accent
          stone: '#78716C'
        }
      },
      borderRadius: {
        'card': '12px',
        'inner': '8px'
      }
    }
  },
  plugins: [],
}
