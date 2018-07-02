const http = require('http');  // same as https

// req: http.ClientRequest
const req = http.request(   // or just http.get(...
    { hostname: 'www.google.com', method: 'GET' },
    (res) => {
        // res: http.IncomingMessage
        console.log(res.statusCode);
        console.log(res.headers);

        res.on('data', (data) => {
            console.log(data.toString());
        });
    }
);

req.on('error', (e) => console.log(e));
req.end();

console.log(req.agent);  // http.Agent