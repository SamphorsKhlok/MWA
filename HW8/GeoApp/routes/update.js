var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;
var url = require('url');

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log("update");
    var urlObj = url.parse(req.url,true);

    req.db.locations.find({_id:ObjectId(urlObj.query.id)}).toArray(function(err, items) {
        if(err) throw err;
        console.log(items);
        res.render('update', { title: 'Update Location', name:items.Name, categories:items.Categories, latitude:items.Latitude, longtitude:items.Longitude });
    });
});

// update
router.post('/edit', function(req, res, next) {
    console.log("update");
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
    res.render('index', { title: 'Express' });
});

module.exports = router;
