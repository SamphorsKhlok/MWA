var fs = require('fs');
process.on('message', (path)=>{
    //console.log(path);
    var file = fs.readFile('./'+path,'UTF-8', (error, data)=>{
        if(error) throw error;
        process.send(data);
        //or use process.send(data.toString()); if UTF-8 is not used
    });

})

