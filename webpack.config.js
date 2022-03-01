const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.jsx',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
        },
      },
    ],
  },
  devServer: {
    proxy: { '/api': 'http://localhost:3000' },
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: '/',
    },
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
};
