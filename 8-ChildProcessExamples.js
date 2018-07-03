const { spawn } = require('child_process');

// const child = spawn('pwd');  print working directory in Unix
const child = spawn('cmd', ['cd']); // print working directory in CMD

// other events on child: disconnect, error, message, close
// stdio objects: child.stdin, child.stdout, child.stderr

child.stdout.on('data', (data) => {
    console.log(`child stdout:\n${data}`);
});

child.stderr.on('data', (data) => {
    console.log(`child stderr:\n${data}`);
});

child.on('exit', function (code, signal) {
    console.log(`child process exited with code ${code}, signal ${signal}`);
});