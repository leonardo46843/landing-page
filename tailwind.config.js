/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kanit"],
      },
      colors: {
        primary: "#f59e0b",
        secondary: "#1e40af",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
