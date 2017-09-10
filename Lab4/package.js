// var moment = require('moment');
// console.log(moment().format("ddd,hA"));

var http = require('http');
var server = http.createServer((req,res)=> {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end("Hello Uncle Sam 2");
}).listen(8800,'127.0.0.1');
