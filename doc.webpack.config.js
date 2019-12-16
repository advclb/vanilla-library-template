const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./doc/index.js",
  output: {
    path: path.resolve(__dirname, "doc/dist")
  },
  devServer: {
    host: "localhost",
    port: 8080,
    hot: true,
    open: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
