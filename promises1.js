//Promises are to be returned so it should be inside some function
//Though it might be passed with some variable also but its good practice to return it by some function

//Promises return either resolve or reject values
//Only one can be returned at a time so some conditions are used to return either resolve or reject

var getSomething = () => {
    return new Promise((resolve , reject) => {
        resolve('Its resolved .............');
        // reject('Its rejected ..............');
    });
};

// Different ways to catch or use the value returned by promises........

//1st way using only (.then) method................
//It takes 2 functions first for resolve and second for reject

// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });


//2nd way is to use (.then and catch method)......................
//In this method the .then will returned the value rturned by resolve 
//And catch will return the value returned by reject 

getSomething().then( data => {
    console.log(data);
}).catch( err => {
    console.log(err);
});