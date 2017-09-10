const Rx = require('@reactivex/rxjs');
const subject = new Rx.Subject(); 

function sendHello(e) { 
	console.log('sending hello'); 
	e.res.writeHead(200, { 'Content-Type': 'text/plain' }); 
	e.res.end('Hello World\n'); 
} 

subject.subscribe(sendHello) 

const http = require('http'); 
http.createServer((req, res) => { 
	subject.next({ req: req, res: res }); 
}).listen(1337, ()=>console.log('1337'));


