import path from 'path';
import type { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import 'webpack-dev-server';

const config: Configuration = {
  mode: process.env['NODE_ENV'] === 'production' ? 'production' : 'development',
  entry: './client/index.tsx',
  devtool: process.env['NODE_ENV'] === 'production' ? false : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'source-map-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    https: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
      } 
    },
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: '/',
    },
  },
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
};
export default config;
