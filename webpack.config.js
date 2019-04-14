var webpack = require("webpack")
var path = require("path")

process.noDeprecation = true

module.exports = {
  entry: "./view/app.js",
  output: {
      path: path.join(__dirname, 'controller'),
      filename: "bundle.js",
      sourceMapFilename: 'bundle.map'
  },
  devtool: '#source-map',
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /(node_modules)/,
              loader: 'babel-loader',
              query: {
                  presets: ['env', 'stage-0', 'react']
              }
          },
          {
              test: /\.css$/,
              use: ['style-loader','css-loader', {
                  loader: 'postcss-loader',
                  options: {
                    plugins: () => [require('autoprefixer')]
                  }}]
          }
      ]
  },
  plugins: [

      new webpack.DefinePlugin({
          "process.env": {
              NODE_ENV: JSON.stringify("production")
          }
      }),

      new webpack.optimize.UglifyJsPlugin({
          sourceMap: true,
          warnings: false,
          mangle: false
      })
  ]
}