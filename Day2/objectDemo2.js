// cannot write the arrow funtion instead of the old function()
var Person = function (id, name, mobileNo) {
    this.id = id;
    this.name = name;
    this.mobileNo = mobileNo;
}
var Employee = function (dept, desg) {

    this.dept = dept;
    this.desg = desg;
}


var p1 = new Person(1, 'arpit', '9009395852')
var e1 = new Employee('HR', 'Manager')

e1.__proto__ = p1 // this is saying that e1 is child of the p1 and inheritung all the property of the p1

for (var p in e1) {
    //if(e1.HasOwnProperty)
    console.log(p + "-->" + e1[p])
}