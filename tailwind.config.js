/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeDown: {
          "0%": { transform: "translateY(-20px)", opacity: 0 },
          "100%": { transform: "translateY(0)" },
        },
        fadeUp: {
          "0%": { transform: "translateY(100px)", opacity: 0 },
          "50%": { opacity: 0 },
          "100%": { transform: "translateY(0)" },
        },
        fade: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0 },
          "75%": { opacity: 0 },
          "100%": { opacity: 1 },
        },

        fadeIn: {
          "0%": { transform: "translateX(-20px)", opacity: 0 },
          "50%": { opacity: 0.5 },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        fadeDown: "fadeDown 1s ease-in",
        fadeUp: "fadeUp 1s ease-out ",
        fade: "fade 1s ease-in-out",
        fadeIn: "fadeIn 300ms ease-in-out",
      },
    },

    fontFamily: {
      mono: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
