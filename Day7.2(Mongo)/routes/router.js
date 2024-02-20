const express = require('express')
var router = express.Router()

const Employee = require('../models/employee')
//now Employee is pointing to the schema 


router.get("/employees", async function (req, res) {

    try {
        const employee = await Employee.find()
        console.log(employee)
        res.json(employee)

    } catch (err) {
        console.log(err)
    }

})

router.get("/employee/:id", function (req, res) {
   
})


router.post("/employee", function (req, res) {

    
})


router.delete("/employee/:id", function (req, res) {

    

})

router.put("/employee/:id", function (req, res) {

   

})

module.exports = router