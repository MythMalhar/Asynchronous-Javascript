//Normal way ..........................................................


// let todo = () => {
//     let req= new XMLHttpRequest();
//     req.open('GET','https://jsonplaceholder.typicode.com/todos/');
//     req.send();


//     req.addEventListener('readystatechange',() => {
//         if(req.readyState === 4 && req.status === 200){
//             console.log(req.responseText);
//         }else if(req.readyState === 4){
//             console.log("could not found the data..");
//         }
//     });
// };

// todo();

//By callback Function...............................................

console.log(1);
console.log(2);

let todo = (callback) => {
    let req= new XMLHttpRequest();
    req.open('GET','https://jsonplaceholder.typicode.com/todos/');
    req.send();


    req.addEventListener('readystatechange',() => {
        if(req.readyState === 4 && req.status === 200){
            callback(undefined,req.responseText);
        }else if(req.readyState === 4){
            callback('Data couldnot be found',undefined);
        }
    });
};


console.log(3);

todo((err,data) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});

todo = (callback) => {
    let req= new XMLHttpRequest();
    req.open('GET','https://jsonplaceholder.typicode.com/todoss/');
    req.send();


    req.addEventListener('readystatechange',() => {
        if(req.readyState === 4 && req.status === 200){
            callback(undefined,req.responseText);
        }else if(req.readyState === 4){
            callback('Data couldnot be found',undefined);
        }
    });
};

todo((err,data) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});
console.log(4);
console.log(5);