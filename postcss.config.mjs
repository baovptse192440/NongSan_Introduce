const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Pro", "ui-sans-serif", "system-ui"],
      },
    },
  },
};

export default config;
