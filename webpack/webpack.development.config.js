/* eslint-disable global-require, import/no-dynamic-require */

const path = require('path')
const webpack = require('webpack')
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

const { DLL_DIR, DIST_DIR } = require('./constants')
const base = require('./base')

module.exports = {
  ...base({ optimize: false }),
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new webpack.DllReferencePlugin({
      manifest: require(path.resolve(DLL_DIR, 'manifest.json')),
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(DLL_DIR, 'vendor.js'),
    }),
    new Serve({
      port: 8000,
      host: 'localhost',
      static: [DIST_DIR],
    }),
  ],
  watch: true,
}
