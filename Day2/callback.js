/*So a function that is passed to another function as a parameter is a callback function
Callbacks make sure that a function is not going to run before a task is completed but
will run right after the task has completed.
In other words, we can say that a function passed to another function as an argument is 
referred to as a callback function.
*/


/*
var arr = [1, 2, 3, 4, 5, "Hello", "Arpit"]

function addData(val) {
    setTimeout(() => {
        console.log("inside the addData")
        arr.push(val)
       // console.log(arr)   if we print the arr here we get the proper output
    }, 3000);
}

function getData() {
    console.log("inside the getData")
    for (var item of arr) {
        console.log(item)
    }
}

console.log("before")
addData(100)
getData();
console.log("after")

--in the above case we addData() is taking more time so it will call the getData first
--and we not get the proper output because we cant see th element  we added in the addData() on the console
-- we write in such a way that first the addData() will get executed and then the getData()

*/


// so for above problem we use the call back functions

var arr = [1, 2, 3, 4, 5, "Hello", "Arpit"]
function addData(val, callBackGetData) {
    setTimeout(() => {
        console.log("inside the addData")
        arr.push(val)
        callBackGetData();     //now we call the getData() func to get the proper output and to act like synchrounous way
    }, 3000);



}

function getData() {
    console.log("inside the getData")
    for (var item of arr) {
        console.log(item)
    }
}


console.log("before")
addData(100, getData)   //first addData() will get executed completely and then getDataa() is get called so we get proper output
console.log("after")


