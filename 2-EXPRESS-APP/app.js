const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const rootDir = require('./util/path'); //Imports the root directory path from a utility module. This is often used to construct absolute paths for serving static files or rendering views in an Express application.  

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// app.use('/',(req,res,next)=>{
//     console.log("This always runs!");
//     next(); //Allows the request to continue to the next middleware in line
// });
//bodyParsr data sent via form
app.use(bodyParser.urlencoded({extended:false})); //Parses incoming request bodies in a middleware before your handlers, available under the req.body property

app.use(express.static(path.join(rootDir,'public'))); //Serves static files such as images, CSS files, and JavaScript files. It is used to specify the directory from which to serve static assets in an Express application.

app.use('/admin',adminRoutes); //Mounts the specified middleware function(s) at the path which is being specified. It is used to define routes and their corresponding handlers for a specific part of the application, in this case, the admin routes.
app.use(shopRoutes); 

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','404.html')); //Sends a response to the client and ends the request-response cycle
}); //Defines a middleware function that will be executed for all incoming requests that do not match any of the defined routes. It sets the response status to 404 and sends a "Page Not Found" message to the client.

app.listen(3000);