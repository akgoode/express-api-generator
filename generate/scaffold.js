'use strict';

const copyfile = require('./copy-file');
const irregulars = require('./irregulars');

const scaffold = function() {
  let name = process.argv[2];
  let rsName = '';
  if(Object.keys(irregulars).includes(name)) {
    rsName = irregulars[name];
  } else {

    rsName = [
              name,
              name.slice(0, name.length - 1),
              name.charAt(0).toUpperCase() + name.slice(1, name.length - 1),
              name.slice(0, name.length - 1) + 'Schema'
             ];

  }
  copyfile('controller', rsName);
  copyfile('model', rsName);
}();

module.exports = scaffold;
