// parent.js
const { fork } = require('child_process');

const forked = fork('child.js');

forked.on('message', (msg) => {
    console.log('Message from child', msg);
});

forked.send({ hello: 'world' }); // parent messages child

// child.js
process.on('message', (msg) => {
    console.log('Message from parent:', msg);
});

let counter = 0;

setInterval(() => {
    process.send({ counter: counter++ }); // child messages parent
}, 1000);