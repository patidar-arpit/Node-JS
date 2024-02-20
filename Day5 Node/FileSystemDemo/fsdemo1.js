//Importing the fs module-inbuilt for file io
//No need to write the root(.) as it is already provided
const fs = require("fs");

//To read the data from the file
var data = fs.readFileSync("test.txt");  //synchronous method
//This will read the data in the Buffer format and we need to convert it into To String 
//format
console.log(data.toString());

//To write to the file
fs.writeFileSync("test.txt", "This is line7 from program");
// /.............(filename,contentyou want to write in the file)



