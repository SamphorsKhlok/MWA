var express = require('express');
//var mongo = require('mongoskin');
var router = express.Router();
var url = require('url');
var ObjectId = require('mongodb').ObjectID;

/* GET search page. */
router.get('/', function(req, res, next) {
    req.db.locations.find().toArray(function(err, items) {
        if(err) throw err;
        //console.log(items);
        res.render('search', { title: 'Search Location', result: items });
    });

});

// search nearest location
router.post('/search', function(req, res, next) {
    console.log("search");
    //single category only
    // var categoryArr = [];
    // var categoryStr = req.body.categories.split(",");
    // categoryStr.forEach((item)=> categoryArr.push(item));

    var search = {
        Category: req.body.categories || "",
        Name: req.body.name,
        Location: [req.body.longitude|| 0.0, req.body.latitude || 0.0]
    };

    var query = {};

    if(search.Category == '' || search.Location == [0.0,0.0]){
        res.render('error', { message: "Error : incomplete search inputs", error: {status: "normal", stack: "please check your inputs again"}});
    }

    console.log(search);
    //need to convert to numbeer format properly or else it will be string and MongoDB cannot process string
    var coord = new Array(Number(search.Location[0]), Number(search.Location[1]));

    //to handle name is optional
    if(search.Name){
        query = {Location: {$near:coord},
            Name: search.Name,
            Categories: search.Category
        }
    }else{
        query = {Location: {$near:coord},
            Categories: search.Category
        }
    }

    req.db.locations.createIndex({"Location": '2d'});

    req.db.locations.find(query).limit(3).toArray((err,docs)=>{
        if(err) throw "Error is : " + err;
        //console.log(docs);
        res.render('search', { title: 'Search Location', result: docs });
    });

    //nearest within max distance
    // req.db.locations.find({
    //     location:{
    //                 $near:{
    //                     $geometry:{
    //                         type: "Point", 
    //                         coordinates:[‐91.9627755,41.0085809]
    //                     },
    //                     $maxDistance:2000
    //                 }
    //     }
    // });
});

module.exports = router;
