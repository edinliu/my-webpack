const path = require("path");

module.exports = function devServer(config) {
  config.devServer = {
    contentBase: path.resolve(global.PATH.public),
    compress: true,
    port: 3000
  }
}