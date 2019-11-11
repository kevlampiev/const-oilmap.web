const http = require('http');
const greeting = require('./greeting');
const User = require('./user');
const os = require('os');
const Emitter = require('events');


let emitter = new Emitter();
let eventName = "greet";

emitter.on(eventName, () => {
    console.log('Hello all!');
})

http.createServer((res, req) => {
    let name = os.userInfo().username
    let user = new User(name, "Евлампиев", 47, '+');

    req.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    if (request.url === "/") {
        response.statusCode = 302; // временная переадресация
        // на адрес localhost:3000/newpage
        response.setHeader("Location", "http://sporu.net/");
    } else if (request.url == "/client") {
        req.write('<h2> The simple server</h2>');
        req.write('<p>' + greeting.getMessage(user.showInfo()) + '</p>');
        req.end();
    } else {
        response.write("Not Found");
        response.statusCode = 404; // адрес не найден
    }
    response.end();
}).listen(8081, "127.0.0.1", () => {
    console.log('Listening at 8081...');
    emitter.emit(eventName);
});