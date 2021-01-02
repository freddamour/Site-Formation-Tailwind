module.exports = {
  purge:  ['./*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        0: "0",
        // pour les cartes
        500: "500px",
        // pour l'accueil
        650: "650px",
        full: "100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
