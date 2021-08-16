const { expect } = require('@dimensionalpocket/development')
const HtmlWebpackPlugin = require('html-webpack-plugin')

var defaults = require('../')

describe('main require', function () {
  it('exports default configuration', function () {
    expect(defaults.module.rules[0].use.loader).to.eq('babel-loader')
    expect(defaults.module.rules[1].use[0]).to.eq('style-loader')
    expect(defaults.plugins[0]).to.be.an.instanceof(HtmlWebpackPlugin)
  })
})
