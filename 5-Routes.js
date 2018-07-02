const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    switch (req.url) {
    case '/api':
        res.writeHead(200, {'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
        break;
    case '/about':
    case '/home':
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // can see all with http.STATUS_CODES
        res.end(fs.readFileSync(`.${req.url}.html`));
        break;
    case '/':
        res.writeHead(301, { 'Location': '/home' });
        res.end();
        break;
    default:
        res.writeHead(404);
        res.end();
    }
});

server.listen(8000);