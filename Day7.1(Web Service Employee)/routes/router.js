const express = require('express')
var router = express.Router()
var connection = require("../db/dbconnect")


router.get("/employees", function (req, res) {

    connection.query("select * from employees", (err, data, fields) => {

        if (err) {
            console.log(err)
            res.status(500).send("<h3>no data found</h3>")

        }
        else {
            console.log(data);
            res.send(data);
        }
    })
})

router.get("/employee/:id", function (req, res) {
    connection.query("select * from employees where id =?", [req.params.id], (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send("<h3>no data found</h3>")
        }
        else {
            console.log(result);
            res.send(result[0]);
        }


    })
})


router.post("/employee", function (req, res) {

    connection.query("Insert into employees values(?,?,?)", [req.body.id, req.body.name, req.body.salary], (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send("<h3>no data found</h3>")
        }
        else {
            console.log(result)
            res.status(200).send("<h3>Employee Added</h3>")
        }

    })
})


router.delete("/employee/:id", function (req, res) {

    connection.query("delete from employees where id=?", [req.params.id], function (err, result) {

        if (err) {
            console.log(err);
            res.status(500).send("Employee Not found")
        }
        else {
            console.log(result);
            res.send("Employee Deleted");
        }
    })

})

router.put("/employee/:id", function (req, res) {

    connection.query("update employees set name=?,salary=? where id=?", [req.body.name, req.body.sal, req.params.id], function (err, result) {

        if (err) {
            console.log(err);
            res.status(500).send(" Employee Details Not updated..!")
        }
        else {
            console.log(result);
            res.status(200).send("<h4> Employee Details Updated..!<h4>")
        }

    })

})

module.exports = router