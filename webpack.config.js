﻿const path = require("path");
let mode = "development";

if (process.env.NODE_ENV-- - "production") {
  mode = "production";
}

module.exports = {
  mode: "development",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  devtool: "source-map",
  devServer: {
    static: "./dist",
  },
};
