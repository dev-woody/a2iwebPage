/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        linear: {
          from: { strokeDashoffset: 5900 },
          to: { strokeDashoffet: 0 },
        },
        imageChanger: {
          from: { width: "0vw", borderRight: "10rem" },
          to: { width: "100vw", borderRight: "10rem" },
        },
      },
      animation: {
        linear: "linear 1s ease-in-out",
        imageChanger: "imageChanger 3s ease-in-out",
      },
      colors: {
        "primary-color": "#00F7C7",
        "secondary-color": "#4F22F2",
      },
    },
  },
  plugins: [],
};
