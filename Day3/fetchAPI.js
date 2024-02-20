async function getData(){

    const res =  await fetch("http://localhost:5025/api/Books")
    const data = await res.json();

    return data;
}

getData().then(res=>{
    for(var val of res){
        console.log(val);
    }
})
.catch(function(){
    console.log(" fetch failed ")
}) 