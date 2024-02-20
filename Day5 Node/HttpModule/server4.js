const http = require('http')

var server = http.createServer(function (req, resp) {

    resp.writeHeader(200, { "content-type": "text/html" })

    switch (req.url) {

        case "/home":
            resp.write("<h2>Hello EveryOne</h2>")
            resp.end()
            break;

        case "/about":
            resp.write("<h2>About Us Page</h2>")
            resp.end()
            break;

         default:
            resp.write("<h2>Default Request</h2>")
            resp.end()
            break;

    }
})


server.listen(9191, function () {
    console.log("Server Started")
});