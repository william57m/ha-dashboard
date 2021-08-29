const path = require('path');
const webpack = require('webpack');
const package = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';
const publicPath = isProd ? package.panelServingUrl : 'http://0.0.0.0:8080/';
const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: './src/index.js',
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      '@emotion/react': path.resolve('./node_modules/@emotion/react')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ['url-loader']
      },
      {    
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __PUBLIC_PATH__: JSON.stringify(publicPath),
    }),
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: buildPath,
    publicPath,
  },
  devServer: {
    contentBase: buildPath,
    host: '0.0.0.0',
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  }
}
