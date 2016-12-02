'use strict';

var path = require('path');
var shell = require('shelljs');
var fs = require('fs');
var md5 = require('md5');
var logger = require('../util/logger');


var getNpmConfigPath = function () {
  return path.resolve(process.cwd(), 'typings.json');
};

function getFileHash(filePath) {
  return md5(fs.readFileSync(filePath));
}


module.exports = {
  cliName: 'typings',
  getCliVersion: function getNpmVersion () {
    return shell.exec('typings --version', {silent: true}).output.trim();
  },
  configPath: getNpmConfigPath(),
  installDirectory: 'typings',
  installCommand: 'typings install',
  getFileHash: getFileHash
};
