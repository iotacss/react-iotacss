var path          = require('path')
var webpack       = require('webpack')

module.exports = {
  entry: path.join(__dirname, './entry.js'),

  output: {
    path: path.join(__dirname, 'demo'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }
    ]
  },

  devServer: {
    contentBase: 'demo/'
  }
}
