const lets_get_data = async () =>{
    const response = await fetch('JSON_.json');

    if(response.status !== 200){
        //if there is error it will return reject object of promise..
        //this is caught by .catch() method
        throw new Error('Data is not fecthed due to some reason..')
    };

    const data =await response.json();

    return data;
};  

lets_get_data()
    .then(data => { console.log(data);})
    .catch(err => { console.log(err.message);});