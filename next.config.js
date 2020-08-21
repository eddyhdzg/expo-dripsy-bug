const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "dripsy",
  // you can add other packages here that need transpiling
]);

const { withExpo } = require("@expo/next-adapter");

module.exports = withPlugins(
  [withTM],
  withExpo({
    projectRoot: __dirname,
  })
);
