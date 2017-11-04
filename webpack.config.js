const path = require('path')
const webpack = require('webpack')

const env = process.env.NODE_ENV || 'development'

// webpack.config.js
module.exports = {
  entry: path.join(__dirname, './src/index'),

  output: {
    path: path.join(__dirname, './umd'),
    filename: `react-iotacss.${env}.js`,

    // export to AMD, CommonJS, or window
    libraryTarget: 'umd',

    // the name exported to window
    library: 'ReactIotaCSS',

    // strip path comments
    pathinfo: env === 'development',

    // named define for umd
    umdNamedDefine: true
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader'
        },
        include: /src/
      }
    ]
  },

  plugins: env === 'development' ? [] : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: env !== 'development'
    }),

    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },

      output: {
        comments: false,

        // Turned on because emoji and regex is not minified properly using default
        ascii_only: true
      }
    })
  ],

  externals: {
    'react' : {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: "React" // indicates global variable
    },

    'react-dom' : {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: "ReactDOM" // indicates global variable
    }
  }
};
