/* eslint-disable */
const path = require('path');

module.exports = {
  install: function () { },
  config: function () {
    global.config.devServer = {
      contentBase: path.resolve(global.PATH.public),
      compress: true,
      // port: 3000,
      // publicPath: '/',
      stats: {
        colors: true,
        hash: false,
        version: false,
        timings: true,
        assets: true,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: true,
        errorDetails: true,
        warnings: false,
        publicPath: false,
      },
    };
  }
}
