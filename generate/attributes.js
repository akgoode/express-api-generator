'use strict';

const attrSection = function(attribute) {
  let attrArray = attribute.split(':');
  let arr = [];
  arr.push('  ' + attrArray[0] + ': {\n');
  arr.push('    type: ' + attrArray[1] + ',\n');
  arr.push('    required: true\n');
  arr.push('  },');
  return arr.join('');
};

const attributes = function (data, attributes) {
  let lines = data.split('\n');
  let firstHalf = lines.slice(0, 5);
  attributes.forEach((attribute) => {
    firstHalf.push(attrSection(attribute));
  });
  let fileArr = [
    firstHalf.join('\n'),
    lines.slice(9, lines.length).join('\n')
  ].join('\n');
  return fileArr;
};

module.exports = attributes;
