

//Before using promises , it the callback hell...................


// var todo = (file,callback) => {
//     var req=new XMLHttpRequest();
//     req.open('GET',file);
//     req.send();

//     req.addEventListener('readystatechange', () => {

//         if(req.readyState === 4 && req.status === 200){
//             var data=JSON.parse(req.responseText);
//             callback(undefined , data);
//         }else if(req.readyState === 4){
//             callback('The data could not be found....',undefined);
//         };
//     });
// };


// todo('JSON_1.json',(err,data) => {
//     console.log(data);
//     todo('JSON_2.json',(err,data) => {
//         console.log(data);
//         todo('JSON_3.json', (err,data) => {
//             console.log(data);
//         });
//     });
// });



//After using promises..........................................
// The code becomes more readable and reusable
//It becomes easy to understand
var todo = (file) => {

    return new Promise((resolve , reject) => {
        var req = new XMLHttpRequest();
        req.open('GET', file);
        req.send();
    
        req.addEventListener('readystatechange', () => {
            if (req.readyState === 4 && req.status === 200) {
                var data = JSON.parse(req.responseText);
                resolve(data);
            } else if (req.readyState === 4) {
                reject("Error in finding the data.........");
            };
        });
    });
};

todo("JSON_1.json").then( data => {
    console.log(data);
}).catch( err => {
    console.log(err);
});

todo("JSON_2.json").then( data => {
    console.log(data);
}).catch( err => {
    console.log(err);
});

todo("JSON_3.json").then( data => {
    console.log(data);
}).catch( err => {
    console.log(err);
});



//CHAINING OF PROMISES................
//for chaining of promises mutliple then is used and only one catch is used 
//there should be one .then for every promises returned....

todo("JSON_1.json").then(data => {
    console.log(data);
    return todo("JSON_2.json");   //This will return promise of JSON_2.json file
}).then(data => {     //For JSON_2.json file
    console.log(data);
    return todo("JSON_3.json");   //return promise of JSON_2.json file
}).then(data => {
    console.log(data);
}).catch(err => {            // only one catch for all the three promises
    console.log(err);
});

//If anyone promise rejects all thhe following promises get rejected.....