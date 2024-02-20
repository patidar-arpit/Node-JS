// objext can be created without the class

var emp = { id: 12, name: "Arpit", dept: "IT" }  // IT IS A OBJECT IN THE FORMM OF TH KEY VALUE PAIR

console.log(emp.id)
console.log(emp['name'])  // can be access with the subscript operator

emp.mobileNo = '9009395852'  // can also be added the new property of object after creating the once
console.log(emp.mobileNo)


//we can also add  function as a property of the object

var emp1 = {
    id: 1, name: "JayesJ", dept: "IT", display: function () {
        console.log("HELLO JAYESH ")
    }
}
//here the display function is available to the only emp1 object;


// ANOTHER WAY of DECLARING OBJECT IS CONSTRUCTOR FUNCTIONS

const Employee = function (id, name, dept) {

    this.id = id;
    this.name = name;
    this.dept = dept;
    this.display = () => {
        console.log(id + "," + name + "," + dept)
    }
}

e1 = new Employee(1, "bittu", 'HR')
e1.email = "abc@gmail.com";

e2 = new Employee(2, "jayesh", 'IT')

// calling display
e1.display()
e2.display()


for (var p in e1) {
    console.log(p + "-->" + e1[p]) // we cannot use here e1.p
    //p is the name of the property ,e1[p] is the value of the property 
}


