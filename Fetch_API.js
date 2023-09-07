//Fetch API is used to fetch the data from particular server or file
//It is inbuilt API provided by the javascript. Its a native API
//Fetch returns a promise.

fetch('JSON_1.json')  //It wil fetch data for me
.then( response => {    //the returned response is then stored in response object
    console.log("Response: ",response);
    //but response oobject is just the response of the server and not the data we wanted
    //inorder to get the data we have to use json() function.

    // const data=response.json(); 
    // This will not work cause response.json() will return promise too and promise takes some time to execute

    return response.json();
}).then(data => {         //one more .then because response.json is returned promise in object data..
    console.log(data);
}).catch( err => {
    console.log(err);
});


//This is the formal way to fetch data from the server
//first fetch the Link 
//then get the response
//then return the converted json file 
//then print the data