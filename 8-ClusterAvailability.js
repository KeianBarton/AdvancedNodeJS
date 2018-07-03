// cluster.js  - main file to run
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {   // will be for first worker process
    const cpus = os.cpus().length;

    console.log(`Forking for ${cpus} CPUs`);
    for (let i=0; i<cpus; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        if (code !==0 && !worker.exitedAfterDisconnect) {
            console.log(`Worker ${worker.id} crashed. ` +
                        'Starting a new worker...');
            cluster.fork();
        }
    });

    process.on('SIGUSR2', () => {
        const workers = Object.values(cluster.workers);
        const restartWorker = (workerIndex) => {
            const worker = workers[workerIndex];
            if (!worker) return;
            
            worker.on('exit', () => {
                // only restart if worker was purposefully disconnected
                if (!worker.exitedAfterDisconnect) return;
                console.log(`Exited process ${worker.process.pid}`);
                cluster.fork().on('listening', () => {
                    restartWorker(workerIndex + 1);
                });
            });

            worker.disconnect();
        };

        restartWorker(0);
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