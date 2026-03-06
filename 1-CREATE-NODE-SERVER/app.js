const http = require('http');
const routes = require('./routes');
const server = http.createServer(routes);
    //console.log(req.url,req.method,req.headers);
    //process.exit();

server.listen(3001)