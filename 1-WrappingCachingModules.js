// Can export properties via the exports object, but cannot replace directly
exports.id = 1;       // this is ok
exports = { id: 1 };  // this is not ok
module.exports = { id: 1 };  // this is ok
var g = 42;  // local to this file and can't be exported

// Inspect the function by typing in Node:
require('module').wrapper
-> ['(function (exports, require, module, __filename, __dirname {','\n});']

// inspect the arguments
// index.js  - ran with node index.js
console.log(arguments);

// Overriding require function
require = function() {
    return { mocked: true };
};

// Accessing arguments from running Node process
if (require.main == module) {
    // Running as a script
    print(process.argv[2], process.argv[3]);
} else {
    // Being required
    module.exports = functionIWantToUseInMainScriptWithNodeArgs;
}

// Accessing cache
require('./ascii-art');
console.log(require.cache);
delete require.cache['/Users/samer/jscomplete/1.8/ascii-art.js'];
require('./ascii-art');

// exporting for code reuse
module.exports = () => { console.log('can be reused'); };