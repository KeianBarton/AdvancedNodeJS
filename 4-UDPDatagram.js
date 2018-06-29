// difference between UDP and TCP
// https://support.holmsecurity.com/hc/en-us/articles/212963869
const dgram = require('dgram');
const PORT = 3333;
const HOST = '127.0.0.1';

// Server
const server = dgram.createSocket('udp4');

server.on('listening', () => console.log('UDP Server listening'));

server.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address}:${rinfo.port} - ${msg}`)
});

server.bind(PORT, HOST);

// Client (every socket created will use a different port)
const client = dgram.createSocket('upd4');
// whilst we can just send a string, buffers let us dictate the start/end to send
// so we could just send the first n bytes, then the next m etc to split up packets
const msg = Buffer.from('Pluralsight rocks');

client.send(msg, 0, msg.length, PORT, HOST, (err) => {
    if (err) throw err;

    console.log('UDP message sent');
    client.close();
});