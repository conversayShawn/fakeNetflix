const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    viewportWidth: 800,
    viewportHeight: 800,
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
