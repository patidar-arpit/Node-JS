var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("http://localhost:9090/employees", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


