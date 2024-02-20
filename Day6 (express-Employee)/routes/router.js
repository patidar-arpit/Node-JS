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
            res.render("index", { employees: data });
        }
    })
})

router.get("/addEmployee", function (req, res) {
    res.render("addEmployee")
});

router.post("/addEmployee", function (req, res) {

    connection.query("Insert into employees values(?,?,?)", [req.body.id, req.body.name, req.body.salary], (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send("<h3>no data found</h3>")
        }
        else {
            console.log(result)
            res.redirect("/employees")
        }

    })
})


router.get("/delete/:id",function(req,res){
    
    connection.query("delete from Employees where id=?",[req.params.id],function(err,result){

        if(err){
            console.log(err);
            res.status(500).send("Employee Not found or something wrong happens")
        }
        else{
           console.log(result);
           res.redirect("/employees")
        }
    })

})

router.get("/edit/:id",function(req,res){
    
     connection.query("select * from employees where id =?",[req.params.id],(err,data,fields)=>{
           
        if(err){
            console.log(err);
            res.status(501).send("Something wrong happens or Employee Not found")
        }
        else{
            console.log(data);
            res.render("edit",{employee:data[0]})
        }

     })

})

router.post("/edit",function(req,res){

    connection.query("update employees set name=?,sal=? where id=?",[req.body.name,req.body.sal,req.body.id],function(err,result){
           
        if(err){
            console.log(err);
            res.status(500).send("<h4> Employee Details Not updated..!<h4>")
        }
        else{
            console.log(result);
            res.redirect("/employees")
        }

     })

})

module.exports = router