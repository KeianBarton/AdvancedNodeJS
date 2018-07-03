const { exec } = require('child_process');

// Use exec if data returned not too big (buffers all data)
// Use spawn if data is big as then it will be streamed with stdio objects
exec('dir | find /v /c "::"', (err, stdout, stderr) => {
    if (err) {
        console.error(`exec error: ${err}`);
        return;
    }

    console.log(`Number of files ${stdout}`);
});


// Inheriting stdio objects so child stdout instantly sent to process.stdout
const { spawn } = require('child_process');

// in Unix:
const child = spawn('pwd', {
    stdio: 'inherit',
    shell: true   // will use a shell, but not buffer data like exec does
    // cwd: '...' can be used to change working directory
    // env: { ANSWER: 42 } restrict access to parent env object / manually define env values
});

// detatched option
const child = spawn('node', ['timer.js'], {
    detatched: true,
    stdio: 'ignore'
});

child.unref();  // parent process can exit independently of the child