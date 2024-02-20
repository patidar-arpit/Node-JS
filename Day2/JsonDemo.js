// Now how to convert this object into the string
// means converting the object into the json object // javascript object notation 
// json is nothing but the key value pair object type

var emp = { id: 12, name: "Arpit", mobile: "9009395852", dept: "IT" }
jsonObj = JSON.stringify(emp)  // converting the emp  object into the json object(string)

console.log(jsonObj)

//convert the json to javascript object
obj = JSON.parse(jsonObj)
console.log(obj.id)



