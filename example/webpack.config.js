const path = require('path')

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/app.js')
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  devtool: 'cheap-module-source-map',

  module: {
    loaders: [{ test: /\.js$/, loader: 'babel-loader' }]
  }
}
