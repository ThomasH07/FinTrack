/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        courier: ['CourierPrime-Regular'],
        'courier-bold': ['CourierPrime-Bold'],
        'courier-italic': ['CourierPrime-Italic'],
        'comicrelief-regular': ['ComicRelief-Regular'],
        'comicrelief-bold': ['ComicRelief-Bold'],
      },
    },
  },
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}