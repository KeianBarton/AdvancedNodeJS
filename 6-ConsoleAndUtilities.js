// Console class
const fs = require('fs');

const out = fs.createWriteStream('./out.log');
const err = fs.createWriteStream('./err.log');

const console2 = new console.Console(out, err);

setInterval(function() {
    console2.log(new Date());
    console.error(new Error('Whoops'));
}, 5000);

// Utilities module
util.format('One  %s', 'thing');
-> 'One thing'

util.inspect(module, { depth: 0 });
console.dir(module, { depth: 0 });  //outputs to stdout

// Console aliases
console.info('foo');   // same as console.log
console.error('foo');  // same, except writes to stderr (also same as console.warn)

// assertions
console.assert(3 == '3');

// tracing
console.trace("here");

// timing
console.time("test") // stop with console.timeEnd("test")