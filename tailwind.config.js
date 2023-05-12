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
      },
      rotate: {
        270: "270deg",
      },
      borderRadius: {
        "5rem": "5rem",
      },
      animation: {
        linear: "linear 1s ease-in-out",
      },
      colors: {
        "primary-color": "#00F7C7",
        "secondary-color": "#4F22F2",
        "inpal-primary": "#0D273F",
        "inpal-secondary": "#EBC049",
      },
    },
  },
  plugins: [],
};
