const express = require('express')
var router = express.Router()
var connection = require("../db/dbconnect")

//Retrieve all employees
router.get("/employees", function (req, res) {
    connection.query("select * from employees order by id asc", (err, data, fields) => {

        if (err) {
            console.log(err)
            res.status(500).send("no data found")
        }
        else {
            console.log(data);
            //No Need to render views in Webservice
            // res.render("index", { employees: data });

            //Tranfer data in the JSON format
            res.send(data); //Converted to JSON
        }

    })
})

//No verbs in the webservice, only nouns
//Add new Employee
router.post("/employees/employee/:pnum", function (req, res) {
    connection.query("Insert into employees values(?,?,?)",
        [req.body.id, req.body.name, req.body.salary], (err, result) => {
            if (err) {
                console.log(err)
                res.status(500).send("no data found")
            }
            else {
                console.log(result)
                res.status(200).send("Data added successfully");
            }

        })
})

//Get Employee by ID
router.get("/employees/employee/:id", function (req, res) {
    connection.query("select * from employees where id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send("Error")
        }
        else {
            console.log(result);
            res.send(result);
        }
    })
})

//Delete Employee
router.delete("/employees/employee/:id", function (req, res) {

    connection.query("delete from employees where id = ?", [req.params.id], (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send("Error")
        }
        else {
            console.log(result);
            res.send("Deleted Employee with ID: " + req.params.id);
        }
    })
})

//Update Employee
router.put("/employees/employee/:id", function (req, res) {
    connection.query("update employees set name=?, salary=? where id = ?", [req.body.name, req.body.salary, req.params.id], (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send("Error")
        }
        else {
            console.log(result);
            res.send("Updated Employee with ID: " + req.params.id);
        }
    })
})



module.exports = router