var  req=new XMLHttpRequest();

req.open('GET','https://jsonplaceholder.typicode.com/todos/');
// console.log(req);
req.send();
// console.log(req);

req.addEventListener('readystatechange',()=>{
    // console.log(req,req.readyState);

    //if readystate is 4 that is we can do what we want
    //the request is fullfilled and in ready state
    //Ready state 4 means request is complete
    //req.status will be 200 i.e. OK status thn only following code will be executed
    if(req.readyState===4 && req.status===200){
        console.log(req.responseText);
    }else if(req.readyState===4){
        console.log("Coould not find the data");
    }
});
