var os = require('os');

function checkSystem(){
    return new Promise(function(resolve,reject){
        //2Gb = 2097152Kb
        if(os.freemem() < 2097152){
            reject("This app needs at least 2 GB of RAM");
        }else if(os.cpus().length < 2){
            reject("Processor is not supported");
        }else{
            resolve("System is checked successfully.");
        }
    });
}

checkSystem()
    .then((data)=> console.log(data))
    .catch((error)=> console.log(error));
console.log('checking your system ...');

// //TODO: rewrite the function with observable
// var os = require('os');
// const Rx = require('@reactivex/rxjs');
//
// var source = Rx.Observable.create(function (observer) {
//     observer.next('checking your system ...');
//     if(os.freemem() < 2097152){
//         observer.error("This app needs at least 2 GB of RAM");
//     }else if(os.cpus().length < 2){
//         observer.error("Processor is not supported");
//     }else{
//         observer.complete();
//     }
// });
//
// var subscription = source.subscribe(
//     (data)=> console.log(data),
//     (error)=> console.error(error),
//     ()=> console.info("System is checked successfully.")
//
// );
//
// subscription.unsubscribe();