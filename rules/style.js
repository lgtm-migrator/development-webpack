// Following recommendations from:
// https://webpack.js.org/loaders/sass-loader/#getting-started
module.exports = {
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    'style-loader',
    // Translates CSS into CommonJS
    'css-loader',
    // Compiles Sass to CSS
    'sass-loader'
  ]
}
