const path = require('path')
const SRC_PATH = path.resolve(__dirname, 'src/index.tsx')
const DIST_DIR = path.resolve(__dirname, 'public')

module.exports = {
  entry: {
    app: ['whatwg-fetch', SRC_PATH],
    vendors: [
      'react',
      'react-dom'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader', 'awesome-typescript-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}
