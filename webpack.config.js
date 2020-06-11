const path = require("path");
global.PATH = {
  src: "src",
  public: "public",
}
let config = {
  entry: {
    index: path.resolve(global.PATH.src, "index.js"),
  },
  output: {
    path: path.resolve(global.PATH.public),
    filename: "[name].js",
  },
  module: {
    rules: []
  },
  plugins: [],
  resolve: { alias: {} }
}
module.exports = (env) => {
  global.isInstall = env === "install"
  require('./webpack/assets/img-loader&file-loader&svgr')(config)
  require('./webpack/scripts/babel-loader.react&styled-jsx')(config)
  require('./webpack/assets/html')(config)
  // require('./webpack/settings/preact_alias')(config)//用dynamic-cdn會沒作用
  if (env === "prod" || global.isInstall) {
    // require('./webpack/settings/dynamic-cdn')(config)
    require('./webpack/styles/styleProdRules')(config)
    // require('./webpack/scripts/compression')(config)
  }
  if (env === "dev" || global.isInstall) {
    require("./webpack/settings/devServer")(config)
    require('./webpack/styles/styleDevRules')(config)
    require('./webpack/styles/css&post-css_dev')(config)
  }
  if (global.isInstall) {
    console.log("All package installed!!")
    process.exit()
  }
  return config
}