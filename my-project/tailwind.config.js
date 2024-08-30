/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mediumbue: "#0000cd",
        white: "#eeeeee",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".c-border": {
          border: "1px solid #0000cd",
        },
      });
    },
    function ({ addUtilities }) {
      addUtilities({
        ".focus-underline": {
          "&:focus+p": {
            "text-decoration": "underline",
          },
        },
      });
    },
  ],
  corePlugins: {
    preflight: false,
  },
};
