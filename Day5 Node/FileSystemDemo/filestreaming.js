const fs = require("fs");

//Creating file stream
var rs = fs.createReadStream("test.txt");
var str = "";


//3 events - data, error, end will occurred


// this will be get called when the data is coming from the stream
rs.on("data", function (chunk) {
    str += chunk;
});

// this event will be occured when thier is no data to read in the steam and end of data comes
rs.on("end", function () {
    console.log("Reached end of file : " + str);

});

// this will be get callled when the error occured 
rs.on("error", function (err) {
    console.log("Error occurred " + err);
});












