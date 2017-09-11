var express = require('express');
var router = express.Router();

var fetch = require('node-fetch');
var link = 'https://jsonplaceholder.typicode.com/users';

var Rx = require('rxjs/Rx');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/promise', function(req, res, next) {
    var fetchPromise = fetch(link);
    fetchPromise.then(data => data.json())
        .then(data => res.render('users', { title:'users', result: data}))
        .catch(data=>console.error(error));
});

router.get('/observable', function(req, res, next) {
    var fetchPromise = fetch(link);
    Rx.Observable.fromPromise(fetchPromise)
        .flatMap(data=> data.json())
        .subscribe(data=> res.render('users', { title:'users', result: data}));
});

//work with ES7
router.get('/async',function(req, res, next){
    fetchingResult(req,res);
});

async function fetchingResult(req,res){
    try{
        var promise = fetch(link).then(data=> data.json());
        var result = await promise;
        res.render('users', { title:'users', result: result});
    }catch(error){
        console.error(error);
    }
}

module.exports = router;
