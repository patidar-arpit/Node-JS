const express = require("express");
var app = express();
var bodyparser = require("body-parser");

//Middleware
//To parse the data from the URL and separate data from URL, 
//It will generate a object by name query if method is GET
//It will generate a object by name body if the method is POST
//Extended false will tell that the data is in text format
//urlencoded does next by default, no need to write next() to send the request to next middlewareS
app.use(bodyparser.urlencoded({ extended: false }))

app.get("/login", function (req, resp) {
    resp.sendFile("/public/login.html", { root: __dirname });   // __ -> Dunder
})


app.post("/validate", function (req, resp) {
    //The authentication can be done in another file and we can use require method to use
    //that method here directly

    //To fetch the POST method data, we use req.body object to fetch the data
    var userName = req.body.name;
    var password = req.body.pass;

    if (userName === "arpit" && password === "arpit") {
        //Redirecting the client to the calculator page if authorized
        resp.sendFile("/public/calculator.html", { root: __dirname });
    }
    else {
        resp.send("<h1>Unauthorized!</h1>")
    }
})

app.get("/calculate", function (req, resp) {
    //Parsing the data from URL in the Query object as the method is GET
    switch (req.query.btn) {
        //If the button value is 'add'
        case "add":
            var num1 = parseInt(req.query.num1);
            var num2 = parseInt(req.query.num2);
            resp.send("<h1>Addition is " + (num1 + num2) + "</h1>")
            break;
        case "fact":
            num1 = parseInt(req.query.num1);
            resp.send("<h1>Factorial is 120 </h1>")
            break;

    }
})

app.listen(6969, function () {
    console.log("Server started on Port : 6969")
})















