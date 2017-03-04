'use strict';

const testPort = +('ga'.split('')
  .reduce((p, c) => p + c.charCodeAt().toString(16), ''));

module.exports = {
  options: {
    env: {
      NODE_ENV: 'test',
      NODE_PATH: process.env.PWD,
      PORT: testPort,
    },
  },
  all: ['<%= paths.src.spec %>'],
};
