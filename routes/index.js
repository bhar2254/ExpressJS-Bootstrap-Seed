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
var ENV = {};

var fetch = require('../fetch');
var { GRAPH_ME_ENDPOINT } = require('../authConfig');

const datetime_format = '%Y-%m-%dT%H:%i';
const date_format = '%Y-%m-%d';

//	This will be stored in SQL db later
SITE_META = {
	'title':'ExpressJS Bootstrap Seed',
	'subtitle':'For building websites as quick as you can.'
}

function buildEnv(req, res, next) {
	ENV = SITE_META;
	ENV.loc = req.originalUrl;
	
	next();
}

require('dotenv').config({ path: '.env.dev' });

/* GET home page. */
router.get('/', buildEnv, function(req, res, next) {
	res.render('index', { env: ENV,
		title: 'Index'});
});

/* GET home page. */
router.get('/about', buildEnv, function(req, res, next) {
	ENV.loc = req.originalUrl;
	res.render('index', { env: ENV,
		title: 'About'});
});

router.get('/status', buildEnv, function(req, res, next) {
	res.send({'status':200});
});

module.exports = router;
