/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Nunito Variable", "sans-serif"],
        body: ["Nunito Sans Variable", "sans-serif"],
      },
      colors: {
        primary: "#334155",
        secondary: "#0E7490",
      },
    },
  },
  plugins: [],
};
