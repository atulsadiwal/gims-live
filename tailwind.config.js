/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      content: {
        backgroundImage: {

        }
      },
      colors: {
        'home': '#3E0066',
        'custom-green': '#2b7258',
        'custom-yellow': '#ffc107',
        'custom-gray': '#003300',
        gradient: {
          from: "#007bff",
          to: "#ff4081",
        },
      },
    },
    fontFamily: {
      FONT1: ['Font1', 'sans-serif'],
      FONT2: ['Font2', 'sans-serif'],
      novaReg: ['nova-regular', 'proximanova-regular'],
      novaSemi: ['nova-semibold', 'proximanova-semibold'],
      novaBold: ['nova-bold', 'proximanova-bold'],
      novaLight: ['nova-light', 'proximanova-light'],
      novaThin: ['nova-thin', 'proximanova-thin'],
      montserrat: ['montserrat', 'montserrat'],
    },
  },
  plugins: [],
}