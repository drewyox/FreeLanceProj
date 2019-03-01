const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  devtool: 'eval-source-map',
  devServer: {
    contentBase: '.dist'
  },

  module: {

    rules: [

      {
        test:/\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }

      // configurations for loaders will go here
    ]
  },

  plugins: [

    new HtmlWebpackPlugin ({
      inject: 'body',
      template: './src/index.html',
      filename: 'index.html'

    })

  ]

};
