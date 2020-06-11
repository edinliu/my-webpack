if (global.isInstall) {
  const script = "npm install -D babel-loader @babel/preset-env @babel/preset-react styled-jsx react react-dom"
  require('../helpers/install')(script)
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