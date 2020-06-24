/* eslint-disable global-require */
/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
module.exports = function (script) {
  const shell = require('shelljs');
  console.log(script);
  shell.exec(script);
};
