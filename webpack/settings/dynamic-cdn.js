if (global.isInstall) {
  const script = "npm install -D html-webpack-plugin dynamic-cdn-webpack-plugin"
  require('../helpers/shellExec')(script)
}

const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (config) {
  const isTrue = (element) => element === true
  if (config.plugins.map(plugin => plugin instanceof HtmlWebpackPlugin).findIndex(isTrue) === -1) {
    config.plugins.push(new HtmlWebpackPlugin())
  }
  config.plugins.push(new DynamicCdnWebpackPlugin())
}