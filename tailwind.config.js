/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-yellow": "F8F6D6",
        jet: "353535",
        "hunyadi yellow": "E1AA44",
      },
      fontFamily: {
        PlayfairDisplay: "Playfair Display",
        Montel: "Montel",
      },
      backgroundImage: {
        "hotel-entry": "url('/assets/images/hotel-entry.jpg')",
      },
    },
  },
  plugins: [],
};
