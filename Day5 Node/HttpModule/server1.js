const http = require("http");
//Async function
//Handles all the incoming requests 
//Same as the SERVLET takes 2 params - req and resp
var server = http.createServer(function (req, resp) {
    //Gives the url and method of the incoming Request
    console.log("Received Request: " + req.url + " Method: " + req.method);
    //Sending the header (status, content-type)
    resp.writeHeader(200, { "content-type": "text/html" });
    resp.write("<h1>Hello World!</h1>");
    //To send the data to the Browser
    resp.end("<h1>END</h1>");
})

//To start the server
server.listen(9090, function () {
    console.log("Server Running at PORT : 9090");
})