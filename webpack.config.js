/* eslint-disable */
const path = require('path');
global.PATH = {
  src: 'src',
  imgPath: 'images/',
  public: 'public/',
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
  plugins: [
  ],
  resolve: {
    alias: {},
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.wasm', '.mjs', '.cjs'],
  },
};
module.exports = (env, { mode = 'development' }) => {
  global.config.mode = mode;
  const generalConfig = [
    /**
      script
    */
    //ts
    require('./webpack/assets/html'),
    require('./webpack/scripts/typescript__babel-loader__react__styled-jsx'),
    // require('./webpack/scripts/typescript__babel-loader__react__styled-components__source_map'),
    // require('./webpack/scripts/typescript__babel-loader__react__styled-components'),
    // require('./webpack/scripts/typescript__babel-loader__react'),
    // require("./webpack/scripts/typescript__ts-loader__react"),
    // require('./webpack/scripts/typescript__awesome-typescript-loader__react__jest'),//未完成
    //js
    // require('./webpack/scripts/javascript__babel-loader__react'),
    require('./webpack/scripts/javascript__babel-loader__react__styled-jsx'),
    //other
    require('./webpack/scripts/preact_alias'),//假如跟dynamic-cdn一起使用，preact不會取代react
    /**
      assets
     */
    require('./webpack/assets/url-loader&img-loader'),
    // require('./webpack/assets/url-loader&img-loader&svgr'),
    /**
      settings
    */
    // require('./webpack/settings/bundle-analyzer'),
  ]
  const devConfig = [
    require('./webpack/styles/styleDevRules'),
    require('./webpack/scripts/source-map'),
    require('./webpack/settings/devServer'),
    require('./webpack/settings/optimization_DEV'),
    // require('./webpack/scripts/react-hash-router-alias'),
  ]
  const prodConfig = [
    require('./webpack/settings/copy-file'),
    require('./webpack/styles/styleProdRules'),
    // require('./webpack/settings/dynamic-cdn'),
    // require('./webpack/settings/compression'),//產生.gz
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
