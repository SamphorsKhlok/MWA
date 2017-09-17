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
    var categoryArr = [];
    var categoryStr = req.body.categories.split(",");
    categoryStr.forEach((item)=> categoryArr.push(item));

    var search = {
        Categories: categoryArr || [],
        Name: req.body.name || null,
        Location: [req.body.latitude || 0.0,req.body.longitude|| 0.0]
    };

    var lat = search.Location[0];
    var lng = search.Location[1];

    req.db.locations.createIndex({"Location": '2d'});

    //nearest top 10
    req.db.locations.find({"Location": {$near:[lat,lng]}
        //Name: {$in:[search.Name,""]},
        //Categories: search.Categories,

    },(err,docs)=>{
        if(err) throw err;
        console.log(docs);
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
