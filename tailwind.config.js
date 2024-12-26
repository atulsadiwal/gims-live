/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 2s linear infinite',
        marquee: 'marquee 25s linear infinite',
        spinreverse: 'spin 1s linear infinite reverse',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      backgroundImage: { 
        'btn-gradient': 'linear-gradient(to right, #1163fb, #9c3aed)',
        'BG1': "url('/public/image/three-students.webp')",
        'BG2': "url('/public/image/incredible-bg-new.webp')",
        'BG3': "url('/public/image/one-exam-bg-new.webp')",
        'BG4': "url('/public/image/building-gims.webp')",
        'BG5': "url('/public/image/awards.webp')",
        'BG6': "url('/public/image/pgdmBG.webp')",
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
  },
  plugins: [],
}
