const mysqlconnection = require("mysql2");

const connection = mysqlconnection.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    port: 3306,
    database: "express"
})

connection.connect(function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Connected to database");
    }
});


module.exports = connection
