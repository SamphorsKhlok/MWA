const http = require('http');
const url = require('url');
const {fork} = require('child_process');
const server = http.createServer();

var fs = require('fs');

server.on('request',(req,res)=>{
    //console.log(url.parse(req.url,true));
    var urlObj = url.parse(req.url,true);
    if(urlObj.query.url){
        const childProcess = fork('forkStream.js');
        childProcess.send(urlObj.query.url);
        childProcess.on('message', (data)=> res.end(data));
    }else{
        res.end("path not found");
    }

}).listen(4000,'127.0.0.1');