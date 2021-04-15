module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: (theme) => ({
      red: theme("colors.red.primary"),
    }),
    extend: {
      colors: {
        white: "#fff",
        blue: {
          medium: "#0095f6",
          mediumHover: "#0095f6b3",
        },
        black: {
          light: "#262626",
          faded: "#00000059",
        },
        gray: {
          base: "#616161",
          background: "#fafafa",
          primary: "#dbdbdb",
        },
        red: {
          primary: "#ed4956",
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
      backgroundColor: ["disabled"],
      display: ["group-hover"],
    },
  },
  plugins: [],
};
