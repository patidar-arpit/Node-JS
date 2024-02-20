const http = require("http");
const fs = require("fs");
//Creating file stream
//3 events - data, error, end
var rs = fs.createReadStream("ticketBooking.html");
var str = "";
rs.on("data", function (chunk) {
    str += chunk;
});
rs.on("end", function () {
    // console.log("Reached end of file : " + str);

});
rs.on("error", function (err) {
    console.log("Error occurred " + err);
});
//Async function
//Handles all the incoming requests 
//Same as the SERVLET takes 2 params - req and resp
var server = http.createServer(function (req, resp) {
    //Gives the url and method of the incoming Request
    console.log("Received Request: " + req.url + " Method: " + req.method);
    //Sending the header (status, content-type)
    resp.writeHeader(200, { "content-type": "text/html" });
    resp.write(str);
    //To send the data to the Browser
    resp.end();
})

//To start the server
server.listen(9090, function () {
    console.log("Server Running at PORT : 9090");
})