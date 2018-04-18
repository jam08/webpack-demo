const HtmlWebpackPlugin = require("html-webpack-plugin");
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = {
  devServer: {
    // Display only errors
    stats: "errors-only",
    host: process.env.HOST, // Defaults to localhost
    port: process.env.PORT, // Defaults to 8080
    open: true // Opens the page in browser
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack demo",
    }),
    new ErrorOverlayPlugin()
  ],
};