/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        saathi: {
          50: '#f0f9f4',
          100: '#dcf2e3',
          200: '#bbe5ca',
          300: '#8ad1a6',
          400: '#54b67d',
          500: '#2f9a5b',
          600: '#207a47',
          700: '#1b613b',
          800: '#174d31',
          900: '#143f2a',
          950: '#0a2417',
        },
        saffron: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdba8',
          300: '#ffc070',
          400: '#ff9a37',
          500: '#fe7d10',
          600: '#ef6406',
          700: '#c64a07',
          800: '#9d3a0e',
          900: '#7e3110',
          950: '#431706',
        },
        ink: {
          50: '#f6f7f9',
          100: '#ebeef3',
          200: '#d3dae5',
          300: '#aebcd0',
          400: '#8295b4',
          500: '#63789b',
          600: '#4e6082',
          700: '#404e6a',
          800: '#374258',
          900: '#313949',
          950: '#1e2533',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Baloo 2"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-soft': 'floatSoft 4s ease-in-out infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'blink': 'blink 5s ease-in-out infinite',
        'wave': 'wave 2.5s ease-in-out infinite',
        'sound-wave': 'soundWave 0.8s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
        'fade-up': 'fadeUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'thinking-spin': 'thinkingSpin 3s linear infinite',
        'mouth-talk': 'mouthTalk 0.35s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatSoft: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
        blink: {
          '0%, 90%, 100%': { transform: 'scaleY(1)' },
          '93%, 97%': { transform: 'scaleY(0.1)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(20deg)' },
          '75%': { transform: 'rotate(-15deg)' },
        },
        soundWave: {
          '0%, 100%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.1)' },
        },
        thinkingSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        mouthTalk: {
          '0%, 100%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(31, 73, 41, 0.08)',
        'card': '0 8px 30px -4px rgba(31, 73, 41, 0.12)',
        'glow': '0 0 40px -5px rgba(47, 154, 91, 0.4)',
        'glow-saffron': '0 0 40px -5px rgba(254, 125, 16, 0.4)',
      },
    },
  },
  plugins: [],
};
