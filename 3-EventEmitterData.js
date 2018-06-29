const fs = require('fs');
const EventEmitter = require('events');

class WithTime extends EventEmitter {
    // ...args - rest parameter - indefinite number of arguments defined as an array
    execute(asyncFunc, ...args) {
        console.time('execute');
        asyncFunc(...args, (err, data) => {
            if (err) {
                return this.emit('error', err);
            }

            this.emit('data', data); // data emitted
            console.timeEnd('execute');
        });
    }
}

const withTime = new WithTime();

withTime.on('data', (data) => { // data is accessible
    console.log(`Length: ${data.length}`);
});

withTime.execute(fs.readFile, __filename);


// UncaughtException - use case for process.once
process.once('uncaughtException', (err) => {
    console.log(err);
    // do some cleanup
    process.exit(1); // exit anyway
});


// Prepend/remove listener
withTime.prependListener('data', (data) => {});
withTime.removeListener('data', (data) => {});
