var express = require('express');
var router = express.Router();
var mongoClient  = require('mongodb').MongoClient;
const crypto = require('crypto');
const decipher = crypto.createDecipher('aes256','asaadsaad');

/* GET home page. */
router.get('/', function(req, res, next) {
    mongoClient.connect('mongodb://127.0.0.1/SamDB', ((err,db)=>{
        if(err) throw err;
        db.collection('homework7').findOne({},(err,doc)=>{
            if(err) throw err;
            //console.dir(doc);
            db.close();
            let secret = decipher.update(doc.message,'hex','utf8');
            secret += decipher.final('utf8')
            console.log(secret);
            res.render('index', { title: 'Secret', text: secret });
        });

        console.dir("call findOne");
    }));

});

module.exports = router;
