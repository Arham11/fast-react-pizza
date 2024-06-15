/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // direct property (like fontfamily below) will override all the fontfamily of  tailwind
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    // use to inject additional custom classes
    extend: {
      height: {
        screen: "100dvh", // dynamic verticle height (better the vh in mobile screen)
      },
    },
  },
  plugins: [],
};
