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

/* GET cover page. */
router.get('/', buildEnv, function(req, res, next) {
	res.render('base/cover', { env: ENV,
		title: 'Welcome to BlaineHarper.com', subtitle: 'Feel free to take a look around and steal whatever you like'});
});

/* GET about page. */
router.get('/about', buildEnv, function(req, res, next) {
	ENV.loc = req.originalUrl;
	res.render('about/about', { env: ENV,
		title: 'About EBS', subtitle:'Express-Bootstrap-Seed is a project to make deploying brand new websites as painless as possible'});
});

/* GET gallery page. */
router.get('/gallery', buildEnv, function(req, res, next) {
	ENV.loc = req.originalUrl;
	res.render('base/gallery', { env: ENV,
		title: 'Gallery', subtitle:'Khajit has wares, if you have the coin.',cards:[
			{heading:'Sample Item',img:'/favicon.png',content:'<p class="lead">This is a sample item with text and an optional price or button for more info.</p><p class="lead text-center text-success">$0.25</p>'},
			{heading:'Sample Item',img:'/favicon.png',content:'<p class="text-muted">This is a sample item with text and an optional price or button for more info.</p><p class="lead text-center text-success">$0.25</p><button type="button" class="btn-primary m-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">More Details</button>'},
			{heading:'Sample Item',img:'/favicon.png',content:'<p class="text-muted">This is a sample item with text and an optional price or button for more info.</p>'},
			{heading:'Sample Item',img:'/favicon.png',content:'<p class="text-muted">This is a sample item with text and an optional price or button for more info.</p>'},
			{heading:'Sample Item',img:'/favicon.png',content:'<p class="text-muted">This is a sample item with text and an optional price or button for more info.</p>'},
			{heading:'Sample Item',img:'/favicon.png',content:'<p class="text-muted">This is a sample item with text and an optional price or button for more info.</p>'},
			{heading:'Sample Item',img:'/favicon.png',content:'<p class="text-muted">This is a sample item with text and an optional price or button for more info.</p>'},
			{heading:'Sample Item',img:'/favicon.png',content:'<p class="text-muted">This is a sample item with text and an optional price or button for more info.</p>'},
			{heading:'Sample Item',img:'/favicon.png',content:'<p class="text-muted">This is a sample item with text and an optional price or button for more info.</p>'}
		]}
	);
});

router.get('/status', buildEnv, function(req, res, next) {
	res.send({'status':200});
});

module.exports = router;
