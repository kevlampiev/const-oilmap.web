let http = require('http');

http.createServer((res, req) => {
    //    res.writeHead(200);
    req.end('Hello from server....');
}).listen(8081, "127.0.0.1", () => {
    console.log('Listening at 8081...');
});