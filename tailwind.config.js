/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'header': "Montserrat",
        'text': "Nunito Sans"
      }
      ,
      colors: {
        "bg": "#f4f4f2",
        "theme": "#118088",
        "theme-light": "#d4f1f7",
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [
    require("daisyui"),
    require("@tailwindcss/aspect-ratio")
  ],
};
// theme 1 = #C0E1BD
// theme 2 = #0E8553
// theme 3 = #0D7F88
// theme 4 = #F5B18E
// theme 5 = #F68574
