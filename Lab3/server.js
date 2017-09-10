// var http = require('http');
// var myServer = http.createServer();
// myServer.on('request',function(req,res){
//     res.writeHeader(200,{'Content-type':'text/plain' });
//     res.write('Hello World');
//     res.end();
// });
// myServer.listen(8800,'127.0.0.1');

// require('http').createServer(function (req,res) {
//     res.writeHead(200,'Content-type', 'text/plain');
//     res.write('HelloWord');
//     res.end();
// }).listen(8800,'127.0.0.1');


// //with self sign certificate
// var fs = require('fs');
// var http = require('https');
// var server = http.createServer({
//     //key: fs.readFileSync('./key.poem'),
//     //cert:fs.readFileSync('./cert.poem'),
// });
//
// server.on('request',(req,res)=>{
//         res.writeHead(200, {"Content-type": "text/plain"});
//         res.write("HelloWorld");
//         res.end();
//     }
// );
//
// server.listen(443);

//return json
var http = require('http');
var server = http.createServer();
server.on('request',(req,res)=>{
    res.writeHead(200, {'content-type': 'application/json'});
    var obj = {
        "Name": "Sam",
        "Nickname": "UncleSam"
    };

    res.end(JSON.stringify(obj));
});

server.listen(8800,'127.0.0.1');