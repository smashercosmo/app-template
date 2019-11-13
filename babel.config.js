module.exports = function config(api) {
  return {
    presets: [
      ['@babel/preset-modules'],
      ['@babel/preset-react', { development: api.env('development') }],
      ['@babel/preset-typescript'],
    ],
  }
}
