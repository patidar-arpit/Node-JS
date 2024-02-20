const express = require('express')
const app = express()
const bodyparser = require('body-parser');
const path = require("path");       //To use path.join on line 7
const routes = require("./routes/router")       //Importing the router.js file to use routes

//Configure the application
app.set("views", path.join(__dirname, "views"));  //To tell the path of Views folder containing all the views
app.set("view engine", "ejs");   //to tell the view engine we will be using

app.set(express.static(path.join(__dirname, "public"))); //To tell the path of static files in public folder
// app.use("/css",express.static(path.join(__dirname,"public/css")));
// app.use("/js",express.static(path.join(__dirname,"public/js")));

//define middleware
bodyparser.urlencoded({ extended: false });

//define routes
app.use("/", routes);

//Start the server
app.listen(6969, function () {
    console.log("Server started on Port : 6969");
    module.exports = app;
})  