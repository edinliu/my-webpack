/* eslint-disable */
module.exports = {
  install: function () { },
  config: function () {
    global.config.optimization = {
      mangleWasmImports: true,
      mergeDuplicateChunks: true,
      minimize: false,
      nodeEnv: 'development',
    };
  }
}
