var express = require('express');
//var mongo = require('mongoskin');
var router = express.Router();
var url = require('url');
var ObjectId = require('mongodb').ObjectID;

/* GET home page. */
router.get('/', function(req, res, next) {
    req.db.locations.find().toArray(function(err, items) {
        if(err) throw err;
        //console.log(items);
        res.render('index', { title: 'Geo Location', result: items });
    });

});

// add function
router.post('/add', function(req, res, next) {
    console.log("add");
    var categoryArr = [];
    var categoryStr = req.body.categories.split(",");
    //console.log("category is :"+categoryStr);
    categoryStr.forEach((item)=> categoryArr.push(item));

    var doc = {
        Name: req.body.name,
        Categories: categoryArr,
        Latitude: req.body.latitude,
        Longitude: req.body.longitude
    };

    req.db.locations.insert(doc,(err,docInserted)=>{
        if(err){
            res.render('error', { message: "Error Add Doc", error:error });
        }else{
            console.log("Success :" + JSON.stringify(docInserted));
            res.redirect('/');
        }
    });
});

//delete
router.post('/delete', function(req, res, next) {
    console.log("delete");
    var urlObj = url.parse(req.url,true);
    req.db.locations.remove({_id:ObjectId(urlObj.query.id)},(err,docRemoved)=>{
        if(err){
            res.render('error', { message: "Error Remove Doc", error:error });
        }else{
            console.log("Success remove :" + JSON.stringify(docRemoved));
            res.redirect('/');
        }
    });
});

module.exports = router;
