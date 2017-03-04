'use strict';

const fs = require('fs');
const transform = require('./transform');

module.exports = function (type, rsName) {

  let typeNum = (type === 'controller') ? 0 : 1;

  const promiseReadFile = function (inFile, options) {
    return new Promise( (resolve, reject) => {
      fs.readFile(inFile, options, (error, data) => {
        if (error) {
          reject(error);
        }

        resolve(data);
      });
    });
  };

  const promiseWriteFile = function (outFile, data, outFileFlag) {
    return new Promise( (resolve, reject) => {
      fs.writeFile(outFile, data, { flag: outFileFlag }, (error) => {
        if (error) {
          reject(error);
        }

        resolve(true);
      });
    });
  };

  promiseReadFile('./generate/templates/ex-' + type + '.js', { encoding: 'utf8' })
    .then((data) => {
      return transform(data, rsName);
    })
    .then((js) => promiseWriteFile('./app/' + type + 's/' + rsName[typeNum] + '.js', js, 'w'))
    .catch(console.error)
    ;
};
