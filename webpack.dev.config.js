const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {
  return merge(commonConfig, {
    mode: 'development',
    output: {
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
    },
    devtool: 'eval-source-map',
    devServer: {
      port: process.env.PORT || 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.(css)$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },
      ],
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
