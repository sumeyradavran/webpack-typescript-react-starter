const DotenvWebpackPlugin = require('dotenv-webpack')
const path = require('path')
module.exports = {
  context: __dirname,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
    assetModuleFilename: 'assets/[name][ext]'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new DotenvWebpackPlugin()
  ],
}
