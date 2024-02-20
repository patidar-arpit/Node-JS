const express = require("express");
var router = express.Router();
var connection = require("../db/dbconnect");


router.get("/products", function (req, res) {
    connection.query("select * from products", (err, data, fields) => {
        if (err) {
            console.log(err);
            res.status(500).send("<h1>No Data Found</h1>");
        }
        else {
            console.log("In Products")
            console.log(data)
            //send the data to EJS(View Engine)
            //will generate ./views/index.ejs
            //This will be done because of the import of ejs engine in app.js
            res.render("index", { proddata: data });
        }
    });
});


router.post("/addProduct", function (req, res) {
    connection.query("insert into products values(?,?,?)", [req.body.id, req.body.name, req.body.price], function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
})

//This is same object routes in app.js file
module.exports = router;