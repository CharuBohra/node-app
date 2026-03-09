const path = require('path'); //Provides utilities for working with file and directory paths. It allows you to work with file paths in a way that is independent of the operating system, making it easier to write cross-platform code.
const express = require('express');

const rootDir = require('../util/path'); //Imports the root directory path from a utility module. This is often used to construct absolute paths for serving static files or rendering views in an Express application.

const router = express.Router(); //Creates a new router object that can be used to define routes and middleware for a specific part of the application. It allows you to modularize your route handling and organize your code better.

router.get('/add-product',(req,res,next)=>{
    // console.log("In another middleware!");
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'); //Sends a response to the client and ends the request-response cycle
        res.sendFile(path.join(rootDir,'views','add-product.html')); //Sends a file as an octet stream. Optionally, you can provide the name of the file to be sent as an attachment, which will prompt the user to download the file instead of displaying it in the browser.
});

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/'); //Redirects the client to a different URL and ends the request-response cycle
    //res.send('<h1>The Product Page</h1>'); //Sends a response to the client and ends the request-response cycle
});

module.exports = router;