const http = require('http');
const greeting = require('./greeting');

http.createServer((res, req) => {
    //    res.writeHead(200);
    req.end(greeting.getMessage() + '.....');
}).listen(8081, "127.0.0.1", () => {
    console.log('Listening at 8081...');
});