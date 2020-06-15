if (global.isInstall) {
  const script = "npm install -D postcss-loader precss autoprefixer style-loader css-loader sass-loader node-sass"
  require('../helpers/shellExec')(script)
}

const cssModuleRegex = /\.module\.css$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const cssRegex = /\.css$/;
const sassRegex = /\.(scss|sass)$/;
const postCssConfig = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: [
      require('precss'),
      require('autoprefixer'),
    ],
  },
}
const cssModuleRule = {
  test: cssModuleRegex,
  use: [
    {
      loader: 'style-loader',
      options: { attributes: { srcType: 'cssModule' } }
    },
    {
      loader: 'css-loader',
      options: {
        modules: {
          mode: 'local',
          localIdentName: '[path]_[name]__[local]--[hash:base64:5]',
        },
        importLoaders: 1
      }
    },
    postCssConfig
  ]
}
const sassRule = {
  test: sassRegex,
  exclude: sassModuleRegex,
  use: [
    {
      loader: 'style-loader',
      options: { attributes: { srcType: 'sass' } }
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
      }
    },
    postCssConfig,
    'sass-loader'
  ]
}
const sassModuleRule = {
  test: sassModuleRegex,
  use: [
    {
      loader: 'style-loader',
      options: { attributes: { srcType: 'sassModule' } }
    },
    {
      loader: 'css-loader',
      options: {
        modules: {
          mode: 'local',
          localIdentName: '[path]_[name]__[local]--[hash:base64:5]',
        },
        importLoaders: 1
      }
    },
    postCssConfig,
    'sass-loader',
  ],
}
module.exports = function styleDevRules(config) {
  config.module.rules.push(
    cssModuleRule,
    sassRule,
    sassModuleRule
  )
}