/* eslint-disable */
const path = require('path');

global.PATH = {
  src: 'src',
  imgPath: 'images/',
  public: 'public',
  build: 'build',
};
global.config = {
  entry: {
    index: path.resolve(global.PATH.src, 'index.tsx')
  },
  output: {
    path: path.resolve(global.PATH.build),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [],
  },
  plugins: [],
  resolve: { alias: {} },
};
module.exports = (env) => {
  const generalConfig = [
    require('./webpack/assets/html'),
    require("./webpack/scripts/typescript&react"),
    require('./webpack/scripts/babel-loader&react'),
    require('./webpack/assets/img-loader&file-loader'),
    // require('./webpack/assets/img-loader&file-loader&svgr'),
    // require('./webpack/scripts/babel-loader&react&styled-jsx'),
    // require('./webpack/scripts/babel-loader&react&eslint-loader'),
    // require('./webpack/scripts/preact_alias'),//用dynamic-cdn會沒作用
  ]
  const devConfig = [
    require('./webpack/styles/styleDevRules'),
    require('./webpack/scripts/source-map'),
    // require('./webpack/settings/devServer'),
  ]
  const prodConfig = [
    require('./webpack/styles/styleProdRules'),
    // require('./webpack/settings/dynamic-cdn'),
    // require('./webpack/settings/compression'),
  ]
  if (env === 'dev') {
    for (let i = 0; i < generalConfig.length; i++) generalConfig[i].config()
    for (let i = 0; i < devConfig.length; i++) devConfig[i].config()
  }
  if (env === 'prod') {
    for (let i = 0; i < generalConfig.length; i++) generalConfig[i].config()
    for (let i = 0; i < prodConfig.length; i++) prodConfig[i].config()
  }
  if (env === 'install') {
    for (let i = 0; i < generalConfig.length; i++) generalConfig[i].install()
    for (let i = 0; i < devConfig.length; i++) devConfig[i].install()
    for (let i = 0; i < prodConfig.length; i++) prodConfig[i].install()
    console.log('All package installed!!');
    process.exit();
  }
  return global.config;
};
