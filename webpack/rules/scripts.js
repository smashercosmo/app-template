const { SRC_DIR } = require('../constants')

module.exports = () => {
  return [
    {
      test: /\.tsx?$/,
      include: [SRC_DIR],
      use: [
        {
          loader: 'babel-loader',
        },
      ],
    },
  ]
}
