const server = require('net').createServer();
let counter = 0;
let sockets = {};

server.on('connection', socket => { // fires whenever client connects to server
    socket.id = counter++;
    sockets[socket.id] = socket;

    console.log('Client connected'); 
    socket.write('Welcome new client!\n');

    socket.on('data', data => {
        Object.entries(sockets).forEach(([, sckt]) => {
            sckt.write(`${socket.id}: `);
            sckt.write(data);
        });
    });

    socket.on('end', () => {
        delete sockets[socket.id];
        console.log('Client disconnected');
    });
});

server.listen(8000, () => console.log('Server bound'));