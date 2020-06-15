if (global.isInstall) require('../helpers/shellExec')("npm install -D html-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * @param fileName {string} export file's name
 * @param template {string} input file's path
 */
function newHtmlWebpackPlugin(fileName, template) {
  return new HtmlWebpackPlugin({
    filename: fileName,
    template: template,
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true,
      minifyCSS: true,
      minifyJS: true
    },
    inject: true
  })
}
module.exports = function (config) {
  config.plugins.push(
    newHtmlWebpackPlugin("index.html", global.PATH.public + "/index.html"),
  )
}

