/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // === LANDSCAPE & PLANT PALETTE ===
        forest: {
          deep:    "#0d2416",  // Night forest
          dark:    "#1a3a0a",  // Dense canopy
          DEFAULT: "#2d5016",  // Forest floor
          mid:     "#3d6b1f",  // Leaf mid
          light:   "#5a9a2c",  // Young shoots
        },
        moss:    "#4a7c3f",   // Moss on stone
        sage:    "#87a96b",   // Sage leaf
        fern:    "#6b8f47",   // Fern frond
        leaf:    "#a8c96e",   // Sunlit leaf
        dew:     "#e8f5e3",   // Morning dew on grass
        meadow:  "#c8e6a0",   // Open meadow
        // === SOIL & EARTH ===
        soil: {
          dark:   "#2a1a0a",  // Dark rich soil
          DEFAULT:"#6b4226",  // Brown loam
          light:  "#9b6845",  // Sandy loam
          clay:   "#c17f5a",  // Clay soil
        },
        // === GOLDEN WHEAT / HARVEST ===
        wheat:   "#c9a84c",   // Ripe wheat
        harvest: "#e8c56a",   // Harvest gold
        straw:   "#f0d98a",   // Dry straw
        // === SKY & WATER ===
        sky:     "#7fb3d3",   // Clear sky
        horizon: "#a8cce0",   // Pale horizon
        // === ACCENT: TECH BLUE (for AI / satellite features) ===
        tech: {
          DEFAULT: "#2563eb",
          light:   "#3b82f6",
          dark:    "#1d4ed8",
        },
        // === WARM EARTH TONES ===
        terracotta: "#c1440e",
        amber:      "#d97706",
        parchment:  "#faf6ee", // Natural parchment BG
        cream:      "#f5f0e6", // Warm cream
        // === DARK THEME ===
        night:      "#0a1f0d", // Deep night green-black
        canopy:     "#112a10", // Forest canopy dark
        bark:       "#1e3a1a", // Tree bark dark
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        serif:   ['Georgia', 'serif'],
      },
      backgroundImage: {
        'landscape-gradient': 'linear-gradient(135deg, #0d2416 0%, #1a3a0a 30%, #2d5016 60%, #3d6b1f 100%)',
        'hero-gradient':      'linear-gradient(to right, #0a1f0d 0%, #0d2416 40%, rgba(13,36,22,0.85) 70%, transparent 100%)',
        'card-gradient':      'linear-gradient(145deg, rgba(45,80,22,0.08) 0%, rgba(26,58,10,0.05) 100%)',
        'gold-gradient':      'linear-gradient(135deg, #c9a84c 0%, #e8c56a 50%, #c9a84c 100%)',
        'leaf-gradient':      'linear-gradient(135deg, #3d6b1f 0%, #5a9a2c 50%, #87a96b 100%)',
      },
      boxShadow: {
        'forest':     '0 4px 30px -8px rgba(45, 80, 22, 0.35)',
        'forest-lg':  '0 20px 60px -15px rgba(45, 80, 22, 0.25)',
        'harvest':    '0 4px 20px -5px rgba(201, 168, 76, 0.40)',
        'card':       '0 2px 20px -5px rgba(13, 36, 22, 0.12)',
        'card-hover': '0 20px 50px -10px rgba(45, 80, 22, 0.20)',
        'glass':      '0 8px 32px rgba(13, 36, 22, 0.15)',
        'glow-green': '0 0 30px -5px rgba(90, 154, 44, 0.50)',
      },
      animation: {
        'float':         'float 5s ease-in-out infinite',
        'sway':          'sway 6s ease-in-out infinite',
        'pulse-slow':    'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer':       'shimmer 2.5s infinite',
        'grow':          'grow 0.6s ease-out',
        'fade-up':       'fadeUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%':      { transform: 'rotate(2deg)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        grow: {
          '0%':   { transform: 'scaleX(0)', opacity: '0' },
          '100%': { transform: 'scaleX(1)', opacity: '1' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
