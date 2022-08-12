const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => {
  return merge(commonConfig, {
    mode: 'production',
    output: {
      filename: '[name].[contenthash:8].js',
      chunkFilename: '[name].[contenthash:8].chunk.js',
    },
    optimization: {
      runtimeChunk: true,
      splitChunks: {
        minSize: 0,
        cacheGroups: {
          defaultVendors: {
            minSize: 0,
            minChunks: 3,
            test: /node_modules/,
          },
        },
      }
    },
    module: {
      rules: [
        {
          test: /\.(css)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(s(a|c)ss)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
        inject: true,
      }),
      new MiniCssExtractPlugin(),
    ],
  })
}
