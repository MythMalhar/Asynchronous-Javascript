var todo = (callback) => {
    var req=new XMLHttpRequest();
    req.open('GET','https://jsonplaceholder.typicode.com/todos/');
    req.send();

    req.addEventListener('readystatechange', () => {
    //JSON is string fromat in which data is stored........\
    //its because transfer between client and server can not happen in other format....
    //Only string fomat is allowed.....
    //So we have to convert JSON file to proper format like this.......
    

    //NOTE: JSON.parse() will show error :-
    // Uncaught SyntaxError: Unexpected end of JSON input at JSON.parse (<anonymous>)at XMLHttpRequest.<anonymous></anonymous>

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