const fs = require("fs");

//copying the content of the test file into the targer file

fs.copyFile("test.txt", "target1.txt", function (err) {

    // and this callback function is get called after the copy of file is successfulll 
    if (err)
        console.log(err);
    else {
        var data = fs.readFile("target1.txt", function (err, data) {
            console.log(data.toString());
        });
    }
})
