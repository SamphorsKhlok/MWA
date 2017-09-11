var express = require('express');
var router = express.Router();

var fetch = require('node-fetch');
var fetchPromise = fetch('https://jsonplaceholder.typicode.com/users');

var Rx = require('rxjs/Rx');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/promise', function(req, res, next) {
    fetchPromise.then(data => data.json())
        .then(data => res.render('users', { title:'users', result: data}))
        .catch(data=>console.error(error));
});

router.get('/observable', function(req, res, next) {
    Rx.Observable.fromPromise(fetchPromise)
        .map(data=> data.json())
        .subscribe(data=> res.send(data));
});

//work with ES7
router.get('/async',function(req, res, next){
    fetchingResult(req);
});

async function fetchingResult(){
    try{
        let result = await fetchPromise;
        result.then(data => data.json())
            .then(data => res.render('users', { title:'users', result: data}))
            .catch(data=> console.error(error));
    }catch(error){
        console.error(error);
    }
}

module.exports = router;
