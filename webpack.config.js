import path from 'path';
import { fileURLToPath } from 'url';

// temporary solution for using __dirname function in frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  mode: 'development',
  entry: './src/main.js',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'form.js',
    chunkFilename: '[name].js',
    library: {
      name: 'FormJS',
      type: 'window',
    },
  },
  module: {
    rules: [
      {
        test: /\\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      // CSS rules
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

export default config;
