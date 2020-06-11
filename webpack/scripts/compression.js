if (global.isInstall) {
  const script = "npm install -D compression-webpack-plugin"
  require('../helpers/install')(script)
}
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = function (config) {
  config.plugins.push(new CompressionPlugin())
};