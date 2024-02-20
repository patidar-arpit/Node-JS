const promise1 = new Promise(function(resolve,reject){

    setTimeout(() => {
        let flag = true;
        if(flag){
            resolve({id:1,name:"Arpit",mobNo:"9009395852"})  // passing object to the then() we are assuming the promise is get resolved baba
        }
        reject("SOME ERROR PROMISE REJECTED")
    }, 3000);

})

promise1.then((user)=>{

    console.log()                        // we are getting the user from the promise (resolve is returning the user)
    return user.name;      //and from thier we are returning the user.name
})
.then((val)=>{               // this then() catch what the prvious then() is returning
    console.log(val)  
})
.catch((err)=>{
   console.log(err)
})