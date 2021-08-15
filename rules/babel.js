module.exports = {
  test: /\.m?js$/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        ['@babel/preset-env', { targets: 'defaults' }]
      ]
    }
  }
}
