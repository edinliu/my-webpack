if (global.isInstall) {
  const script = "npm install preact"
  require('../helpers/install')(script)
}

module.exports = function (config) {
  config.resolve.alias = {
    "react": "preact/compat",
    "react-dom": "preact/compat"
  }
}