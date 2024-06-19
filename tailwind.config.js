/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    //when in header i write font signature this font is applied
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
}

