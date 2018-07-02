const server = require('http').createServer();

server.on('request', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write('Hello world\n');
    //res.end('Hello world\n');

    setTimeout(function() {
        res.write('Another Hello world\n');
    }, 1000);
});

server.timeout = 1000;
server.listen(8000);