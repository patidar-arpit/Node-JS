const fs = require("fs");

// var data = fs.readFile("test.txt");  // asyncg function 
// console.log(data);                  //This wont work, as the above function is not sync

//This is async call so it will be executed on the other thread and will wait in the
//waiting queue of the NODE, and will be called after the main thread is empty

fs.readFile("test.txt", function (err, data) {   
    // when the reading of the file is get completed the callBack function is get exectuded 
    if (err) {
        console.log("Error occurred");
    }
    else {
        console.log("Async Call : " + data.toString());
    }
})


// this line are executed by the main thread
console.log("After Async Call");
var data = fs.readFileSync("test.txt");
console.log("Sync Call : " + data.toString());



