const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { SRC_DIR } = require('../constants')

/**
 * @param {Object} options
 * @param {Boolean} options.optimize
 */
module.exports = ({ optimize }) => {
  return [
    {
      test: /\.css$/,
      include: [SRC_DIR],
      use: [
        optimize ? MiniCssExtractPlugin.loader : { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            importLoaders: 1,
            modules: {
              localIdentName: optimize
                ? '[name]_[local]_[hash:base64:5]'
                : '[name]_[local]',
            },
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              ctx: {
                optimize,
              },
            },
          },
        },
      ],
    },
  ]
}
