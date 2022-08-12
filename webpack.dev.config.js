const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.base.config')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = () => {
  return merge(commonConfig, {
    mode: 'development',
    output: {
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
    },
    devtool: 'eval-cheap-module-source-map',
    optimization: {
      runtimeChunk: true,
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false,
    },
    devServer: {
      port: process.env.PORT || 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(css)$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(s(a|c)ss)$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
        inject: true,
      }),
      new ReactRefreshWebpackPlugin({
        overlay: false,
      }),
    ],
  })
}
