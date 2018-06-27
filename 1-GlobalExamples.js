// util.js
global.answer = 42;
// index.js
require('./util');
console.log(answer);
// Then run node index.js to see that 42 is logged

// the process object on the global object
node -p "process"
node -p "process.versions"   // versions of Node and its dependencies
node -p "process.env"        // copy of the user environment
        // avoid reading from process.env directly - create a config module and read from there
        export const config = { port: process.env.PORT || 8080 };
node -p "process.release.lts"  // node LTS version label - if undefined, not LTS


// Process exit - useful event emitter
process.on('exit', (code) => {
    // do one final synchronus operation before the node process terminates
});

// uncaughtException - if listening for Node will not exit by default:
process.on('uncaughtException', (err) => {
    // do cleanup
    process.exit(1);
});


// using Buffer
Buffer.alloc(8)        // creates filled buffer of 8 bytes of data
Buffer.allocUnsafe(8)  // creates not-pre-filled buffer so may contain info from older buffers
       .fill()         // fills buffer
Buffer.from('foo')     // creates new buffer filled with specificed string, array or buffer