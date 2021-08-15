const { expect } = require('@dimensionalpocket/development')

var defaults = require('../')

describe('main require', function () {
  it('exports default configuration', function () {
    expect(defaults.module.rules[0].use.loader).to.eq('babel-loader')
    expect(defaults.module.rules[1].use[0]).to.eq('style-loader')
  })
})
