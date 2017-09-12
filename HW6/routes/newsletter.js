var express = require('express');
var router = express.Router();
var fs = require('fs');
var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
    req.session.csrfToken = req.csrfToken();
    res.render('newsletter', { title: 'Newsletter Page', csrftoken: req.session.csrfToken});
});

router.post('/addEmail', function(req, res, next) {
    req.assert('email','email is required').notEmpty();
    req.assert('_csrf','token is not valid').notEmpty();
    //console.log(req.body._csrf);
    //console.log(req.session.csrfToken);

    var errors = req.validationErrors();
    if(errors || req.session.csrfToken != req.body._csrf){
        res.render('error', {
            message: 'field email is required',
            error : {
                status: 'ERROR',
                stack: JSON.stringify(errors)
            }
        } );
    }else{
        console.log(req.body);
        var email = req.body.email;
        fs.appendFile('subscribers.txt', email, function (err) {
            next(err);
        });
        //res.redirect('/thankyou', { title:'Thanks You Page', email: req.body.email });
        res.redirect('/thankyou?email='+req.body.email);
    }

});

module.exports = router;
