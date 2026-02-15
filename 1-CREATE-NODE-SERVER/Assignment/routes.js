// const fs = require('fs');

// const requestHandler = (res,req)=>{
//     const url = req.url;
//     const method = req.method;
//     if(url === '/'){
//         res.setHeader('Content-Type','text/html');
//         res.write('<html>');
//         res.write('<head><title>Greeting</title></head>');
//         res.write('<body><h1>Hello, Welcome to Node.js Server!</h1></body>');
//         res.write('</html>');
//         return res.end();
//     }
//     if(url === '/users'){
//         res.setHeader('Content-Type','text/html');
//         res.write('<html>');
//         res.write('<head><title>Users</title></head>');
//         res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
//         res.write('</html>');
//         return res.end();
//     }
// }

// module.exports = requestHandler;