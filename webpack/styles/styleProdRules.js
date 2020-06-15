if (global.isInstall) {
  const script = "npm install -D postcss-loader precss autoprefixer cssnano @fullhuman/postcss-purgecss style-loader css-loader sass-loader node-sass"
  require('../helpers/shellExec')(script)
}

const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
const sassRegex = /\.(scss|sass)$/
const sassModuleRegex = /\.module\.(scss|sass)$/
const postCssConfig = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: [
      require('precss'),
      require('autoprefixer'),
      require('cssnano')({
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
        }]
      }),
      require('@fullhuman/postcss-purgecss')({
        content: [
          './src/*.js',
          './src/components/*.js',
          './src/pages/*.js'
        ]
      })
    ],
  },
}

const cssRule = {
  test: cssRegex,
  exclude: cssModuleRegex,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
      }
    },
    postCssConfig,
  ]
}
const cssModuleRule = {
  test: cssModuleRegex,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: {
          mode: 'local',
          localIdentName: '[hash:base64:5]',
        },
        importLoaders: 1,
      }
    },
    postCssConfig,
  ]
}
const sassRule = {
  test: sassRegex,
  exclude: sassModuleRegex,
  use: [
    'style-loader',
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
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: {
          mode: 'local',
          localIdentName: '[hash:base64:5]',
        },
        importLoaders: 1,
      }
    },
    postCssConfig,
    'sass-loader',
  ],
}
module.exports = function styleRulesProd(config) {
  config.module.rules.push(
    cssRule,
    cssModuleRule,
    sassRule,
    sassModuleRule
  )
}