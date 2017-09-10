const http = require('http');
const url = require('url');
const fs = require('fs');
const server = http.createServer();
server.on('request',(req,res)=>{
    console.log(url.parse(req.url,true));
    var urlObj = url.parse(req.url,true);
    if(urlObj.query.url){
        var file = fs.createReadStream('./'+urlObj.query.url);
        file.pipe(res);
    }else{
        res.end("path not found");
    }

}).listen(4000,'127.0.0.1');