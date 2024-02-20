const express = require('express');
const app = express();
const bodyParser = require('body-parser')

var routes = require('./routes/router');




app.use(bodyParser.json());
//define midle wares
app.use(bodyParser.urlencoded({ extended: true }));


//define route handles -> that if any request comes forward it to routes
app.use("/", routes);


app.listen(9091, function () {
    console.log("Server is running on port 9091");

});

module.exports = app;