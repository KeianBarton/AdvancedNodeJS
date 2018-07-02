// openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes
const fs = require('fs');
const server = require('https')
.createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
});
server.listen(443);   // default port for HTTPS communication