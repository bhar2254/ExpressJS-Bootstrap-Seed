/*	app.js

	For Indian Hills Community College
	Parking On Hills, https://parking.indianhils.edu
	by Blaine Harper

	PURPOSE: Root application for parking registartion UI and API
*/	

require('./env');

const fs = require('fs');
const dotenv = require('dotenv');
const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const path = require('path');
const cluster = require('cluster');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const msal = require('@azure/msal-node');
const axios = require('axios');
var favicon =	require('serve-favicon');
var cors = require('cors');

var api_version = 	"beta";
var protocols = ['https://','http://'];
var origins = [];

var app = express();

DEBUG = 	true;
//	DB = 	require('./db/sql_connect');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
dotenv.config();
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));

// CORS
app.use(cors({
    origin: '*'
}));

//	Set an endpoint for the root directory
app.use(`/`,require(`./routes/index`));
app.use(`/auth`,require(`./routes/auth`));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

/**
 * Using express-session middleware for persistent user session. Be sure to
 * familiarize yourself with available options. Visit: https://www.npmjs.com/package/express-session
 */
app.use(session({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false, // set this to true on production
    }
}));

app.listen(process.env.PORT, () => {
	console.log(`App listening on port ${process.env.PORT}`)
});

module.exports = app;
