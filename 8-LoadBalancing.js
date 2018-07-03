// cluster.js  - main file to run
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {   // will be for first worker process
    const cpus = os.cpus().length;

    console.log(`Forking for ${cpus} CPUs`);
    for (let i=0; i<cpus; i++) {
        cluster.fork();
    }

    console.dir(cluster.workers, { depth: 0 });
    Object.values(cluster.workers).forEach(worker => {
        worker.send(`Hello Worker ${worker.id}`);
    });
} else {
    require('./server');
}

// server.js
const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
    for (let i=0; i<1e7; i++);  // simulate CPU work
    res.end(`Handled by process ${pid}`);
}).listen(8080, () => {
    console.log(`Started process ${pid}`);
});

process.on('message', msg => {
    console.log(`Message from master: ${msg}`);
});