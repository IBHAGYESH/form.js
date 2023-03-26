const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/main.js",
  watch: true,
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/dist',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
      // CSS rules
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
};