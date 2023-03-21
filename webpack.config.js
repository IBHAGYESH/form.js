export default {
  mode: 'development',
  entry: "./src/main.js",
  watch: true,
  output: {
    path: "./dist",
    publicPath: '/dist',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        "./src"
      ],
      exclude: [
        "./node_modules"
      ],
      loader: 'babel-loader',
      options: {
        presets: [
          ["@babel/env", {
            "targets": {
              "browsers": "last 2 chrome versions"
            }
          }]
        ]
      }
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: "./dist",
    inline: true,
    host: 'localhost',
    port: 8080,
  }
};