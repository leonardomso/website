const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([
  [
    {
      webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
          config.node = {
            fs: "empty",
          };
        }
        return config;
      },
    },
  ],
]);
