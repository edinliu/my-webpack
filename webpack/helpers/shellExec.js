module.exports = function (script) {
  const shell = require('shelljs')
  console.log(script)
  shell.exec(script)
}