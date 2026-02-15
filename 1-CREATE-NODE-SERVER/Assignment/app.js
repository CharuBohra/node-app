const http = require('http');
const routes = require('./routes');

const server = http.createServer((req,res)=>{
    //console.log(req.url,req.method,req.headers);
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Username</title></head>');
        res.write('<body><form method="POST" action="/create-user"><input name=username type=text /><button>Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/users'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });
        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            console.log(message);
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
        });
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Node.js Server</title></head>');
    res.write('<body><h1>Hello, From my Node.js Server</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);