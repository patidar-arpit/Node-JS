// async function alwys return the promise 
async function getData(){

       let flag = true;
       if(flag){
           return "Namaste JS"          // this is get wrapped inside the promise object and then get returned to the caller
       }
       else{
           return "Something Wrong "
       }
    
}

const p = new Promise(function (resolve, reject) {

    let flag = true;
    if (flag) {
        resolve("Namaste JS")
    }
    else {
        reject("Promise Not Resolved")
    }

})

async function getData1(){
   return p ;              // returning the promise p; 
}

//const dataPromise = getData();

const dataPromise = getData1();


dataPromise
.then((str)=>console.log(str))
.catch((str)=>console.log(str))
