function f1() {
    console.log("In function 1")
}
function f2() {
    console.log("In function 2")
}
function f3() {
    console.log("In function 3")
}

user = { id: 1, name: 'Jayesh' };

//adding all the function inside the export object in one go 
module.exports = {
    func1: f1,          // Now we can call the f1() with the name function1() outside the module
    func2: f2,
    func3: f3,
    user: user
}