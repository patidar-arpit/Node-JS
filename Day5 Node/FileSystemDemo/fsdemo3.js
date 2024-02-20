// const fs = require("fs");
// fs.exists("test.txt", (flag) => {
//     if (flag) {
//         fs.stat("test.txt", (err, status) => {
//             console.log(status.isFile())
//             console.log(status.isDirectory())
//             console.log(status.size)
//         })
//     }
// })

const fs1 = require("fs")

//this function return true or false on  the basis of the file exist or not 
fs1.exists("target.txt", function (flag) {
    // call back function chalega jab fs1.exist() complete kr dega apna kaam
    if (flag) {
        fs1.stat("target.txt", function (err, status) {
            console.log(status.isFile())
            console.log(status.size)
        })
    }
    else {
        console.log("File Not Exists")
    }
})