"use strict";
exports.__esModule = true;
var commander_1 = require("commander");
var create_1 = require("./create");
commander_1.program.option('-v, --version').version('0.0.0');
commander_1.program.command('create <name>').action(create_1.create);
commander_1.program.parse(process.argv);
