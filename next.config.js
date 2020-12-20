const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

module.exports = withPlugins([
  [
    withPWA({
      pwa: {
        dest: "public",
      },
    }),
  ],
  [
    {
      env: {
        FATHOM_ID: process.env.FATHOM_ID,
      },
    },
  ],
]);
