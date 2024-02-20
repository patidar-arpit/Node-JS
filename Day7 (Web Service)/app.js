const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');
var routes = require('./routes/router');


app.set('view engine', "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")));

//define midle wares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//define route handles -> that if any request comes forward it to routes
app.use("/", routes);


app.listen(9090, function () {
    console.log("Server is running on port 9090");

});

module.exports = app;