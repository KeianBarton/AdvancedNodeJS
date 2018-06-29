const server = require('net').createServer();

server.on('connection', socket => { // fires whenever client connects to server
    console.log('Client connected'); 
    socket.write('Welcome new client!\n');

    socket.on('data', data => {
        console.log('data is:', data);
        socket.write('data is: ');
        socket.write(data, 'utf8'); // 2nd argument is optional (UTF8 by default)
    });

    socket.setEncoding('utf8');  //global encoding

    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

server.listen(8000, () => console.log('Server bound'));

// Run file in Node, and test using Netcat or Telnet e.g.
// telnet localhost 8000 in CMD will show "Welcome new client!"