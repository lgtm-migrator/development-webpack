# @dimensionalpocket/development-webpack

This package extends `@dimensionalpocket/development-js` with Webpack dependencies and configuration defaults:

* `webpack`
* `babel-loader` - along with `@babel/preset-env`
* `style-loader` - along with `css-loader` and `sass-loader`
* `sass` - Dart Sass
* `html-webpack-plugin`
* `webpack-dev-server`

## Installation

Install the package directly from GitHub (X.Y.Z == release tag):

```shell
npm i --save-dev -E github:dimensionalpocket/development-webpack#X.Y.Z
```

Since this includes `@dimensionalpocket/development-js` as well, you don't need to install it in your project to use its features. (In other words, you shouldn't install both.)

## Webpack Configuration

In your `webpack.config.js`, you can import the default rules and plugins from this library:

```javascript
var defaultBabelRule = require('@dimensionalpocket/development-webpack/rules/babel')
var defaultStyleRule = require('@dimensionalpocket/development-webpack/rules/style')

var defaultPlugins = require('@dimensionalpocket/development-webpack/plugins')

// If you want to modify the defaults, create a copy:
var babelRule = Object.assign({ exclude: /node_modules/ }, defaultBabelRule)

module.exports = {
  // ...
  module: {
    rules: [
      babelRule,
      defaultStyleRule,
      // ...
    ],
  },
  plugins: [
    ...defaultPlugins,
    // ...
  ]
}
```

You can also import all rules at once if you don't need to modify them:

```javascript
var rules = require('@dimensionalpocket/development-webpack/rules')
var plugins = require('@dimensionalpocket/development-webpack/plugins')

module.exports = {
  module: {
    rules: [
      ...rules,
      // ... additional rules here
    ],
  },
  plugins: [
    ...plugins,
    // ... additional plugins here
  ]
}
```

And finally, if you just don't want to change any of the defaults or add new settings:

```javascript
module.exports = require('@dimensionalpocket/development-webpack')
```

The above will import all default rules and plugins.
