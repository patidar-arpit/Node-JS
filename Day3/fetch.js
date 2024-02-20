// fetch is used to send the  ajax request
// it send the date in the form of the json 
// it is the asynchronous function 
// it will always return the promise
// even if it is  problem in the fetch it never fails 

var promise1 = fetch ("url")
.then((result)=>{

    console.log(result);
    // To check if the status code is OK or not
    if(result.status == 200 && result.ok){
        // if it is true
        console.log("Successful completion of the AJAX Request")
        //Converting the data from json to the js array
        return  result.json();
        
    }
    //Throwing the error explicitly, if the status is not OK
    throw "promise rejected via then() function";
},(err) =>{
    console.log("error ocuured",err)
    throw "promise rejected via then() function";
})

// for accessing the data inside the promise1
promise1.then((data) => {console.log(data);})
.catch((err)=>{
    console.log(err);
})



//-------------------------------------------------------------------------
//another way of writing the fetch 
async function fetchdata(){

    var result = await fetch("url")   // async func it takes time to get the result from the API
       // this line wil not execute until the line 38 get finished
    if(result.ok && result.status == 200){
        data =  await result.json()     // async function
        console.log(data)
    }

}

/*  -----
    -----
    some code
*/
fetchdata();