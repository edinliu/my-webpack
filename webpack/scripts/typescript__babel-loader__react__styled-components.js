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
              'babel-plugin-styled-components',
            ],
          },
        },
      ],
    });
  }
}