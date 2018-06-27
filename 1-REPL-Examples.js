// Run in CMD to access REPL
node

// Tab to get autocomplete options

// Capture last outputted variable with _
Math.random();    // 0.9425...
_;                // 0.9425...

// REPL has special commands beginning with .
.       // lists all commands - break, clear, editor etc
.help   // lists all commands with description of each

// You can create a custom REPL session by requiring the REPL module
// repl.js
const repl = require('repl');
let r = repl.start({
    ignoreUndefined: true,            // don't print undefined values
    replMode: repl.REPL_MODE_STRICT   // use strict mode
});
r.context.lodash = require('lodash'); // global context preloads fav libraries

// Show options of node command
node --help