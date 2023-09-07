var todo = (file,callback) => {
    var req=new XMLHttpRequest();
    req.open('GET',file);
    req.send();

    req.addEventListener('readystatechange', () => {
    
        if(req.readyState === 4 && req.status === 200){
            var data=JSON.parse(req.responseText);
            callback(undefined , data);
        }else if(req.readyState === 4){
            callback('The data could not be found....',undefined);
        };
    });
};

todo('JSON_1.json',(err,data) => {
    console.log(data);
    todo('JSON_2.json',(err,data) => {
        console.log(data);
        todo('JSON_3.json', (err,data) => {
            console.log(data);
        });
    });
});