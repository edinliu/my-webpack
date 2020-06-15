if (global.isInstall) {
  const script = "npm install react react-dom"
  const scriptDev = "npm install -D @babel/core babel-loader @babel/preset-env @babel/preset-react"
  require('../helpers/shellExec')(script)
  require('../helpers/shellExec')(scriptDev)
}

module.exports = function babelReact(config) {
  config.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react"
          ]
        }
      }
    ]
  })
}