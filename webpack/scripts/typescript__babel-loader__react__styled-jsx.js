/* eslint-disable */
module.exports = {
  install: function () {
    require('../helpers/install')(['react', 'react-dom', '@types/react', '@babel/runtime'])
    require('../helpers/install-D')([
      'babel-loader',
      '@babel/core',
      '@babel/preset-typescript',
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      'styled-jsx',
      '@babel/plugin-transform-runtime',
    ])
  },
  config: function () {
    config.module.rules.push({
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-typescript',
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread',
              'styled-jsx/babel',
              '@babel/plugin-transform-runtime',
            ],
          },
        },
      ],
    });
  }
}