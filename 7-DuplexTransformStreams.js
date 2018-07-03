// Duplex stream example
const { Duplex } = require('stream');

const inoutStream = new Duplex({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    },

    read(size) {
        if (this.currentCharCode > 90) {
            this.push(null);
            return;
        }
        this.push(String.fromCharCode(this.currentCharCode++));
    }
});

inoutStream.currentCharCode = 65;  // piping A to Z
process.stdin.pipe(inoutStream).pipe(process.stdout);

// Transform stream example 1
const { Transform } = require('stream');

const upperCaseTr = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

process.stdin.pipe(upperCaseTr).pipe(process.stdout);

// Transform stream example 2
const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];

fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .on('data', () => process.stdout.write('.'))
  .pipe(fs.createWriteStream(file + '.gz'))
  .on('finish', () => console.log('Done'));

// or we can avoid events by using transform
const progress = new Transform({
    transform(chunk, encoding, callback) {
        process.stdout.write('.');
        callback(null, chunk);
    }
})

fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .pipe(progress)
  .pipe(fs.createWriteStream(file + '.gz'));

// we can even use the crypto module to encrypt the file
const crypto = require('crypto');
...
fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .pipe(crypto.createCipher('aes192', 'a_secret'))
  .pipe(...)