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
        category: categoryArr || [],
        name: req.body.name || null,
    };

    req.db.locations.find({},(err,docInserted)=>{
        if(err){
            res.render('error', { message: "Error Add Doc", error:error });
        }else{
            console.log("Success :" + JSON.stringify(docInserted));
            res.redirect('/');
        }
    });
});

module.exports = router;
