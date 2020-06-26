/* eslint-disable global-require */
/* eslint-disable func-names */

if (global.isInstall) {
  const script = 'npm install react react-dom';
  const scriptDev = 'npm install -D @babel/core babel-loader @babel/preset-env @babel/preset-react eslint-loader eslint babel-eslint';
  require('../helpers/shellExec')(script);
  require('../helpers/shellExec')(scriptDev);
  require('../helpers/shellExec')('npx install-peerdeps --dev eslint-config-airbnb');
}

module.exports = function babelReact(config) {
  config.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
        },
      },
      {
        loader: 'eslint-loader',
        options: { fix: true },
      },
    ],
  });
};
