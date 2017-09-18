var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;
var url = require('url');

// get the selected id to be updated
router.get('/:id', function(req, res, next) {
    console.log("update");
    var id = req.params.id;

    req.db.locations.find({_id:ObjectId(id)}).toArray(function(err, items) {
        if(err) throw err;
        console.log(items);
        res.render('update', { title: 'Update Location', data: items[0]});
    });
});

// update
router.post('/edit/:id', function(req, res, next) {
    console.log("update");
    var categoryArr = [];
    var categoryStr = req.body.categories.split(",");
    //console.log("category is :"+categoryStr);
    categoryStr.forEach((item)=> categoryArr.push(item));

    var doc = {
        Name: req.body.name,
        Categories: categoryArr,
        Location: [req.body.longitude,req.body.latitude]
    };

    req.db.locations.update({_id:ObjectId(req.params.id)},{$set:{
        Name: doc.Name,
        Categories: doc.Categories,
        Location: new Array(Number(doc.Location[0]),Number(doc.Location[1]))
    }},(err,doc)=>{
        if(err) throw err;
        console.log("success update " + doc);
    });
    res.redirect("/");
});

module.exports = router;
