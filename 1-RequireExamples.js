// Module object
console.log(module);    // node index.js

// Manually resolving a module (without executing)
require.resolve('find-me');

// package.json to make file path resolve under different name
{
    "name": "find-me",
    "main": "start.js"
}

// order of trying to require
// require('something');
// 1. try something.js
// 2. try something.json
// 3. try something.node
const data = require('data');

// data.json
{
    "stuff": [
        { "id" : 1, "task": "Bla"}
    ]
}