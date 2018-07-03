const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    // very inefficient memory usage on server side
    // fs.readFile('./big.file', (err, data) => {
    //     if (err) throw err;

    //     res.end(data);
    // });
    // much more efficient to buffer chunks in memory
    const src = fs.createReadStream('./big.file');
    src.pipe(res);
});

server.listen(8000);