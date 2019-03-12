﻿var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var opn = require('opn');

var index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({strict: false}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/',express.static(path.join(__dirname,'public')));

app.use('/', index);

app.use('/home',require('./routes/home'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found xxx');
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

var port=8005;
app.listen(port,function(){
  console.log('**************************************');
  console.log('    master waiting 分支');
  console.log('**************************************');
  console.log('port='+port);
  console.log("Server Start!");
  var url = 'http://127.0.0.1:' + port;
  opn(url);
});