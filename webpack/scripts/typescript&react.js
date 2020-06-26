/* eslint-disable global-require */
if (global.isInstall) {
  const script = 'npm install react react-dom';
  const scriptDev = 'npm install --save-dev @types/react @types/react-dom typescript ts-loader';
  require('../helpers/shellExec')(script);
  require('../helpers/shellExec')(scriptDev);
}

module.exports = function (config) {
  config.resolve.extensions = [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"]
  config.module.rules.push(
    {
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "ts-loader"
        }
      ]
    },
  )
}