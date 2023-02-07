const path = require('path')
const { merge } = require('webpack-merge')

const common = require('./webpack.config.common.js')
const DIST_DIR = path.resolve(__dirname, 'public')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: DIST_DIR
  },
})
