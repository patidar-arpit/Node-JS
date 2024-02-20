const express = require("express");
const app = express();
const bodyparser = require("body-parser");

app.use(function (req, resp, next) {
    console.log("This is middleWare")
    next();
})

app.get("/home", function (req, resp) {
    //No need to create a File stream, rather just use below method to send file as response
    //Second param -> root path, from where to search for the given file
    resp.sendFile("/public/hello.html", { root: __dirname });
})

app.get("/about", function (req, resp) {
    resp.send("<h1>About Us Page!</h1>");
})

app.listen(9090, function () {
    console.log("Server started")
})











