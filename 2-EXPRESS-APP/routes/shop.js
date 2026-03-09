const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/',(req,res,next)=>{
    // console.log("In the middleware!");
    // res.send('<h1>Hello from Express!</h1>'); //Sends a response to the client and ends the request-response cycle
    // //next(); //Allows the request to continue to the next middleware in line
    res.sendFile(path.join(rootDir,'views','shop.html')); //Sends a file as an octet stream. Optionally, you can provide the name of the file to be sent as an attachment, which will prompt the user to download the file instead of displaying it in the browser.
});

module.exports = router;