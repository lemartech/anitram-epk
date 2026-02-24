/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0B",
        cream: "#F6F1E6",
        gold: "#C9A227",
        goldSoft: "#E0C36A"
      }
    }
  },
  plugins: []
};
