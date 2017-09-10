const {Resolver} = require('dns');
const resolver = new Resolver();
//resolver.setServers('4.4.4.4'); // mum network do not allow public google dns
resolver.resolve4('www.mum.edu',(err,addresses)=>{
    if(err) throw err;
    console.log(addresses);
});

