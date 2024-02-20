const http = require("http")

var server = http.createServer(function (req, resp) {
    resp.writeHeader(200, { "content-type": "text/html" });
    if (req.method === "GET" && req.url === "/home") {
        resp.write("<h1>HIIIIIIIII</h1>")
        resp.end();
    }
    else {
        resp.write("<script>alert('Invalid Request')</script>")
        resp.end();
    }
})


server.listen(9090, function () {
    console.log("Server Running")
})