
setTimeout(()=>{
    console.log("This is also a call Backed function..");
},0);

console.log("1");
console.log("2");
console.log("3");
setTimeout(()=>{
    console.log("This is call backed function.");
},2000);

for(let i=1;i<=1000;i++){
    console.log(1);
};
