/* eslint-disable */
module.exports = {
  install: function () {
    require('../helpers/install')(['react', 'react-dom', '@types/react', '@types/react-dom'])
    require('../helpers/install-D')([
      'typescript',
      'awesome-typescript-loader',
      'source-map-loader',
      'jest',
      'enzyme',
      '@types/enzyme',
      'react-test-renderer',
      'ts-jest',
      '@types/jest',
    ])
  },
  config: function () {
    global.config.module.rules.push(
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      }
    );
  }
}
