// Writeable stream example
const { Writable } = require('stream');

const outStream = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }
});

process.stdin.pipe(outStream); // echoing user input via writeable stream
// or more simply:
process.stdin.pipe(process.stdout);

// Readable stream example
const { Readable } = require('stream');

const inStream = new Readable();

// inefficient as all data pushed at once
// inStream.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
// inStream.push(null);
const inStream = new Readable({
    read(size) {
        if (this.currentCharCode > 90) {
            this.push(null);   // stop after Z
            return;
        }
        this.push(String.fromCharCode(this.currentCharCode++));
    }
});

inStream.currentCharCode = 65; // A

inStream.pipe(process.stdout);