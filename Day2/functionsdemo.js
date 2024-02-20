function f1(){
    console.log("in function f1");
    //console.log(arguments)  // built in array which contains the value of the arguments in the form of key value pair
    var sum  =0;

    for(var i = 0;i<arguments.length;i++){
        sum = sum +arguments[i];
    }
    console.log(sum);
}
f1(10,20,100)
f1(10,100,0,1)   // we can pass multiple parameters to the function 