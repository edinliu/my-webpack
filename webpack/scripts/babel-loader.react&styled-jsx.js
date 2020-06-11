if (global.isInstall) {
  const script = "npm install react react-dom"
  const scriptDev = "npm install -D babel-loader @babel/preset-env @babel/preset-react styled-jsx react react-dom"
  require('../helpers/install')(script)
  require('../helpers/install')(scriptDev)
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
          ],
          plugins: [
            "styled-jsx/babel"
          ]
        }
      }
    ]
  })
}