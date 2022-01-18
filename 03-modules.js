//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternateForExports');
require('./07-mindGrenade');

console.log(data);
console.log(data.items[1]);
console.log(data.singlePerson.name);
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);