//No concept of Interfaces in js
//No concept of access specifier
//Because JS is not oop language

class Person {
    constructor(id, name, mobile) {
        this.id = id;
        this.name = name;
        this.mobile = mobile;
    }

    display() {
        // console.log("id:"+id+"")

        // NEW STYLE Template Operator
        console.log(`id:${this.id},name:${this.name}, Mobile:${this.mobile}`)
    }
}

class Employee extends Person {

    constructor(id, name, mobile, dept, desg) {
        super(id, name, mobile)
        this.dept = dept;
        this.desg = desg


    }

    display() {
        super.display();
        console.log(`Department :${this.dept} , Designation:${this.desg}`)
    }
}


e1 = new Employee(1, "Arpit", '9009395852', 'HR', 'manager')
e1.display();

//we can also add the new property after creating the object 
e1.salary  = 10000;
