/*	index.js

	For Indian Hills Community College
	Parking On Hills, https://parking.indianhils.edu
	by Blaine Harper

	PURPOSE: Root router for express server
*/	

var fs = require('fs');
var express = require('express');
var router = express.Router();
const path = require('path');
require('dotenv').config();

var fetch = require('../fetch');
var { GRAPH_ME_ENDPOINT } = require('../authConfig');

const min_admin = 2;
const datetime_format = '%Y-%m-%dT%H:%i';
const date_format = '%Y-%m-%d';

//	This will be stored in SQL db later
SITE_META = {
	'title':'HarperGuitars.com',
	'subtitle':'Handbuilt Guitars'
}

var ENV = SITE_META;

require('dotenv').config({ path: '.env.dev' });

/* GET home page. */
router.get('/', function(req, res, next) {
	ENV.loc = req.originalUrl;
	res.render('index', { env: SITE_META,
		title: 'Index'});
});

/* GET home page. */
router.get('/about', function(req, res, next) {
	ENV.loc = req.originalUrl;
	res.render('index', { env: ENV,
		title: 'About'});
});

/* GET home page. */
router.get('/blog', function(req, res, next) {
	ENV.loc = req.originalUrl;
	res.render('index', { env: ENV,
		title: 'Blog'});
});

/* GET home page. */
router.get('/projects', function(req, res, next) {
	ENV.loc = req.originalUrl;
	res.render('index', { env: ENV,
		title: 'Projects'});
});

router.get('/status', function(req, res, next) {
	res.send({'status':200});
});

module.exports = router;
