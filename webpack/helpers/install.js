module.exports = function (script) {
  const shell = require('shelljs')
  shell.echo(script)
  shell.exec(script)
}