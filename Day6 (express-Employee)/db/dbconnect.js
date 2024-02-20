const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'dac',
    database: 'wpt'
    /*multipleSatetments:true*/
})


mysqlConnection.connect((err) => {
    if (err) {
        console.log("connectio error: " + err)
    }
    else {
        console.log("connected to database")
    }
})

module.exports = mysqlConnection