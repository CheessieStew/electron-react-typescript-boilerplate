/**
 * Base webpack config used across other specific configs
 */

const path = require('path');

module.exports = {
  module: {
    loaders: [
      { test: /\.g4/, loader: 'antlr4-webpack-loader' },
      {
        test: /\.tsx?$/,
        loaders: [
          'react-hot-loader/webpack',
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/react',
                '@babel/typescript',
                ['@babel/env', { modules: false }],
              ],
              plugins: ['emotion', '@babel/plugin-proposal-class-properties'],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },

  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js',

    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2',
  },

  // https://webpack.github.io/docs/configuration.html#resolve
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    modules: [path.join(__dirname, 'app'), 'node_modules'],
  },

  plugins: [],
};
