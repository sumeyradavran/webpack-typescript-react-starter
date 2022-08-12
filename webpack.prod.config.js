const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {
  return merge(commonConfig, {
    mode: 'production',
    output: {
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
    },
    module: {
      rules: [],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
        inject: true,
      }),
    ],
  })
}
