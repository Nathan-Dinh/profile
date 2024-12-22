/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        handshake: 'handshake 1s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        handshake: {
          '0%': {
            transform: 'rotate(-20deg)', // Move left and slightly rotate
          },
          '50%': {
            transform: 'rotate(20deg)', // Move right and slightly rotate in opposite direction
          },
          '100%': {
            transform: 'rotate(-20deg)', // Return to original position and rotation
          },
        },
      },
      screens: {
        sm: '640px', // Ensure sm breakpoint is correctly defined
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
