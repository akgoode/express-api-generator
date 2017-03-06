'use strict';

const replace = function (word, rsName) {
  if (word.toLowerCase() === 'example' || word === 'examples' || word === 'exampleSchema') {
    switch (word) {
      case 'exampleSchema':
        return rsName[3];
      case 'Example':
        return rsName[2];
      case 'example':
        return rsName[1];
      case 'examples':
        return rsName[0];
    }
  }
  return word;
};

const transform = function (data, rsName) {
  let words = data.split(/([^A-Za-z])/);
  return words.map((word) => {
    if((/\w+/).test(word)) {
      return replace(word, rsName);
    }
    return word;
  }).join('');
};

module.exports = transform;
