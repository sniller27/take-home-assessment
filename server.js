const express = require('express');
const app = express();
const path = require('path');
const http = require('http');


//static files
app.use('/', express.static(path.join(__dirname, '/')));


/**
 *  CONFIGURE AND START SERVER
 */

//Must be at the and, first we create our handle functions and than we start the server
const PORT= process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(PORT, error => {

  error ? console.log(error) : console.log("Server listening on: http://localhost:%s", PORT);

});