var todo = (callback) => {
    var req=new XMLHttpRequest();
    req.open('GET','JSON_1.json');
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

todo((err,data) => {
    if(err){
       console.log(err); 
    }else{
        console.log(data);
    } 
});