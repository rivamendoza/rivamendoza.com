var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

// routes
var index = require('./routes/index');
var projects = require('./routes/projects');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// hook routers
app.use('/', index);
app.use('/projects', projects);

// error when endpoint doesn't exist
app.use(function(req, res, next) {
  res.render('error', { title: 'soundsnclouds server', message: 'Error: endpoint does not exist!' });
});

module.exports = app;

