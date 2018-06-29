const server = require('net').createServer();
let counter = 0;
let sockets = {};

function timestamp() {
    const now = new Date();
    // moment.js for more accurate timekeeping
    return `${now.getHours()}:${now.getMinutes()}`;
}

server.on('connection', socket => { // fires whenever client connects to server
    socket.id = counter++;

    console.log('Client connected'); 
    socket.write('Please type your name: ');

    socket.on('data', data => {
        if (!sockets[socket.id]) {
            socket.name = data.toString().trim(); // convert buffer to string
            sockets.write(`Welcome ${socket.name}!`);
            sockets[socket.id] = socket;
            return;
        }
        Object.entries(sockets).forEach(([, sckt]) => {
            if (socket.id == key) return;
            sckt.write(`${socket.name} ${timestamp()}: `);
            sckt.write(data);
        });
    });

    socket.on('end', () => {
        delete sockets[socket.id];
        console.log('Client disconnected');
    });
});

server.listen(8000, () => console.log('Server bound'));