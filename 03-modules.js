// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names') //require se exported and function calls(if any) are recieved
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')

sayHi('susan')
sayHi(names.Mishra)
sayHi(names.Pandey)
