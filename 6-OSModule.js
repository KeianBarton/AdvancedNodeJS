const os = require('os');

os.cpus();   // CPU models, speed, times
os.networkInterfaces().en0.map(i => i.address);  // IP address
os.freemem();  // free memory
os.userInfo();  // user name, home directory etc