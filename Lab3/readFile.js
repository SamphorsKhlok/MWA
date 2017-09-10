var http = require('http');
var fs = require('fs');
var server = http.createServer((req,res)=>{
    // bad way, consume hight memory and cpu
    // fs.readFile('./big.file', (error,data)=>{
    //     if(error) throw error;
    //     return res.end(data);
    // });

    //better way
    var file = fs.createReadStream('./big.file');
    file.pipe(res);
});
server.listen(8080,'127.0.0.1');