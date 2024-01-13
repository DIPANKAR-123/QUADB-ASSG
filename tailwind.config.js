/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'custom-sm': '400px', // Add your custom small screen breakpoint
       
      },
    },
  },
  plugins: [],
};
