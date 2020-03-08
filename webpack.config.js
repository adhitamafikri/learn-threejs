const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const DotenvWebpack = require('dotenv-webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name].[contentHash].js',
    chunkFilename: '[name].[contentHash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ],
  },
  plugins: [
    new DotenvWebpack(),
    new HTMLWebpackPlugin()
  ],
  devServer: {
    index: path.resolve(__dirname, 'public/dist/index.html'),
    contentBase: path.join(__dirname, 'public/dist'),
    hot: true,
    port: 3004
    writeToDisk: true,
    open: 'Google Chrome',
  }
}
