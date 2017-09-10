const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res)=>{
    // fast method
    var src = fs.createReadStream('./Chicago.jpg').pipe(res);

    //the slow method,
    // fs.readFile('./Chicago.jpg',(err, data)=>{
    //     if(err) throw err;
    //     res.end(data);
    // });
}).listen(8080, '127.0.0.1');