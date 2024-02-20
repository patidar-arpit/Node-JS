const fs = require("fs");

//Creating file reading stream
var rs = fs.createReadStream("test.txt");

// creating the write stream which will write the data continously in the file
var ws = fs.createWriteStream("target3.txt");

rs.pipe(ws);  // directly read the data from the stream and write into the another file
// it is internally doing all the threee event data,error,end 










