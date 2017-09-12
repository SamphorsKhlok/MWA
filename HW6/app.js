var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lessMiddleware = require('less-middleware');
var validator = require('express-validator');
var csrf = require('csurf');
var session = require('express-session');

var index = require('./routes/index');
var users = require('./routes/users');
var newsletter = require('./routes/newsletter');
var thankyou = require('./routes/thankyou');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//set development env
app.set('env','development');
console.info(app.get('env'));

//enable and allow trust proxy
app.enable('trust proxy');
app.set('trust proxy', true);

//hide powered by Express
app.set('x-powered-by', false);

// case sensitive routing
app.enable('case sensitive routing');
//strict routing
app.set('strict routing', true);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(validator());
app.use(csrf({cookie:true}));
app.use(session({
    secret: "session"
}));

app.use('/', index);
app.use('/users', users);
app.use('/newsletter',newsletter);
app.use('/thankyou',thankyou);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
