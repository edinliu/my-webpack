if (global.isInstall) {
  const script = "npm install -D postcss-loader precss autoprefixer style-loader css-loader"
  require('../helpers/shellExec')(script)
}

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
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

module.exports = function (config) {
  config.module.rules.push(
    {
      test: cssRegex,
      exclude: cssModuleRegex,
      use: [
        {
          loader: 'style-loader',
          options: { attributes: { srcType: 'css' } }
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          }
        },
        postCssConfig
      ]
    }
  )
}