//Async await is another way for handling promises
//It is used to reduce the code lenght and get rid of .then and .catch methods.
/* But still one .then and .catch is needed if we return the data outside the function  because the function having async keyword infront of it will become asynchronous funtion.\

    It will return a promise and promise returns either resolve or reject object and it takes some time to execute.
    Hence if we return the data out of the function one .then and .catch method is required.
*/

//Its will not stop the flow of the code because async function is made to store the asynchronous code inside it..
//Synchronous code will work as it is.............. Example 
console.log(1);
console.log(2);
console.log(3);

//Await is used when something returns the promise..
// As we know fetch wil return a promise await is used cause untill the response is not fetched further things are not done....
//Try removing await infront of fetch function, you will get the error

const lets_get_data = async () =>{
    const response = await fetch('JSON_1.json');
    const data =await response.json();

    return data;
};  

console.log(4);
console.log(5);
lets_get_data()
    .then(data => { console.log(data);})
    .catch(err => { console.log(err);});

//This is the proof that async will return a promise... here test is now became the promise.. see the console
 const test = lets_get_data();
 console.log(test);   