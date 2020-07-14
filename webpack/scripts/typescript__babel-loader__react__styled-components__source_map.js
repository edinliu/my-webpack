/* eslint-disable */
module.exports = {
  install: function () {
    require('../helpers/install')(['react', 'react-dom'])
    require('../helpers/install-D')([
      'babel-loader',
      '@babel/core',
      '@babel/plugin-external-helpers',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
      'babel-plugin-styled-components',
      'enzyme',
      'enzyme-adapter-react-16',
      'enzyme-to-json',
      'jest',
      'ts-jest',
      '@types/enzyme',
      '@types/enzyme-adapter-react-16',
      '@types/jest',
      '@types/react',
      '@types/react-dom',
      'html-webpack-plugin',
      'source-map-loader',
      'webpack',
      'webpack-cli',
      'webpack-dev-server',
      'webpack-hot-middleware'
    ])
  },
  config: function () {
    const path = require('path');
    const webpack = require('webpack');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    global.config.module.rules.push(
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
            plugins: [
              '@babel/plugin-external-helpers',
              'babel-plugin-styled-components',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread',
            ],
          },
        },
      },
    );
    global.config.optimization = {
      mangleWasmImports: true,
      mergeDuplicateChunks: true,
      minimize: true,
      nodeEnv: 'production',
    };
    global.config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"',
      })
    )
    if (global.config.mode === 'development') {
      global.config.devtool = 'source-map';
      global.config.module.rules.push({
        loader: 'source-map-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
      });
      global.config.plugins.concat([
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"development"',
        }),
        new webpack.HotModuleReplacementPlugin(),
      ]);
    }
  }
}