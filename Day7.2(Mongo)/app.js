const express = require('express');
const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/arpit"    // connect with my mongo db and database arpit

const app = express();

mongoose.connect(url, { useNewUrlParser: true })

const connection = mongoose.connection

connection.on('open', () => {
    console.log("Connected to mongodb")
})

connection.on('error', () => {
    console.log("Error connecting to mongodb")
})


var routes = require('./routes/router');




//define route handles -> that if any request comes forward it to routes
app.use("/", routes);


app.listen(9091, function () {
    console.log("Server is running on port 9091");

});

module.exports = app;