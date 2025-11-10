/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f4ff",
          500: "#667eea",
          600: "#5a67d8",
          700: "#4c51bf",
        },
        secondary: {
          500: "#764ba2",
          600: "#6b46c1",
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        orbit: "orbit 8s linear infinite",
        "slide-in-left": "slideInLeft 1s ease forwards",
        "slide-in-right": "slideInRight 1s ease forwards",
        "fade-in-up": "fadeInUp 0.8s ease forwards",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        gradient: "gradient-shift 3s ease infinite",
      },
    },
  },
  plugins: [],
}
