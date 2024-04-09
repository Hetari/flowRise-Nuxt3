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
        heading: ["Nunito", "sans-serif"],
        body: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
