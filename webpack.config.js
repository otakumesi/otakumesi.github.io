const path = require('path')
const SRC_PATH = path.resolve(__dirname, 'src/index.tsx')

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    app: SRC_PATH,
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
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}
