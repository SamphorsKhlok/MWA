var express = require('express');
var router = express.Router();
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
    var urlObj = url.parse(req.url,true);
    res.render('thankyou', { title: 'Thank you',email:urlObj.query.email });
});

module.exports = router;