const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { DLL_DIR } = require('./constants')

module.exports = {
  mode: 'development',
  entry: {
    vendor: ['react', 'react-dom', 'classnames'],
  },
  output: {
    path: DLL_DIR,
    filename: '[name].js',
    library: '[name]',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(DLL_DIR, 'manifest.json'),
    }),
  ],
}
