var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[Hash]',
          outputPath: 'images/',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: './public',
    compress: true,
    // hot: true,
    inline: true,
    port: 9009,
    open: true,
    stats: {
      assets: false,
      colors: true,
      version: false,
      timings: false,
      chunks: false,
      chunkModules: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './public/favicon.ico',
      template: './public/index.html',
    }),
    new UglifyJSPlugin(),
  ],
};
