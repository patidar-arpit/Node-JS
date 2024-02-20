//importing the express library by require()
const express = require('express')

const app = express()   // crreating  the object of the express

const bodyparser = require('body-parser');   ///defining the middlewares 
//middlewares are the functions which you want to execcute for every request

//for every request .It is common functionality for all urls
//list of middle wares
app.use(function (req, resp, next) {
    console.log("this is first middleware");
    console.log("url:" + req.url)
    next()  /// we write next for going to the next middlewares
})
app.use(function (req, resp, next) {
    console.log("this is second middleware");
    console.log("url:" + req.url)
    next()  /// we write next for going to the next middlewares
})


// Router modules
app.get("/home", function (req, resp) {

    resp.send("<h1>Hello Home Request</h1>")

})

app.get("/about", function (req, resp) {

    resp.send("<h1>Hello about Request</h1>")

})

app.get("/body", function (req, resp) {
    resp.send("<h1>Hello body Request</h1>")
})








app.listen(9090, function () {
    console.log("Server started baba..!!")
})  