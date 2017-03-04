'use strict';

const attrParser = function(attribute) {
  let attrArray = attribute.split(':');
  let attrObj = {
    key: attrArray[0],
    type: attrArray[1]
  };
  return attrObj;
};

const attrSection = function(obj) {
  let arr = [];
  arr.push('  ' + obj.key + ': {\n');
  arr.push('    type: ' + obj.type + ',\n');
  arr.push('    required: true\n');
  arr.push('  },');
  return arr.join('');
};

const attributes = function (data, attributes) {
  let lines = data.split('\n');
  let firstHalf = lines.slice(0, 5);
  attributes.forEach((attribute) => {
    firstHalf.push(attrSection(attrParser(attribute)));
  });
  let fileArr = [
    firstHalf.join('\n'),
    lines.slice(9, lines.length).join('\n')
  ].join('\n');
  return fileArr;
};

module.exports = attributes;
