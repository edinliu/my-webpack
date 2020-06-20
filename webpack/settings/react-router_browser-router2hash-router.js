module.exports = function (config) {
  config.resolve.alias = {
    "react-router-dom/BrowserRouter": "react-router-dom/HashRouter",
  }
}