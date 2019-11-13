/* eslint-disable global-require, import/no-dynamic-require */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SizePlugin = require('size-plugin')

const base = require('./base')

module.exports = {
  ...base({ optimize: true }),
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new CopyWebpackPlugin(['favicon.ico']),
    new CleanWebpackPlugin(),
    new SizePlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
  ],
  stats: {
    children: false,
    modules: false,
    warnings: false,
    entrypoints: false,
    excludeAssets: [/\.(map|ico|html)$/],
  },
}
