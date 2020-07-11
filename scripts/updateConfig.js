const shell = require('shelljs');

shell.exec('git clone "https://github.com/edinliu/my-webpack.git"');
shell.exec('cd my-webpack');
shell.exec('git pull');
shell.exec('cd ..');
shell.exec('cp -r ./my-webpack/webpack ./');
shell.exec('cp -r ./my-webpack/webpack.config.js ./');
shell.exec('cp -r ./my-webpack/package.json ./');
shell.exec('cp -r ./my-webpack/.gitignore ./');