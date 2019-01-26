var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: "./kth_script.js",
  output: {
    filename: "script.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?/, /\.js?$/],
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["env", "react"]
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
