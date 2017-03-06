'use strict';

require('dotenv').load();

const scaffold = require('../lib/wiring/generate/scaffold.js');

let name = process.argv[2];
let attributes = process.argv.slice(3);

scaffold(name, attributes);
