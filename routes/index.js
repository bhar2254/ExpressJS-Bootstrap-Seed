/*	index.js

	For Indian Hills Community College
	Parking On Hills, https://parking.indianhils.edu
	by Blaine Harper

	PURPOSE: Root router for express server
*/	
const SAMPLE_CARD = {heading:'\'19 Taylor 110ce',img:'/favicon.png',content:`<div class='text-center'>Price: <span class="text-success">$0.25</span></div>`,footer:`<div class="text-center text-muted"><div><button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">More Details</button></div></div>`};
const SAMPLE_CARDS = [SAMPLE_CARD,SAMPLE_CARD,SAMPLE_CARD,SAMPLE_CARD,SAMPLE_CARD,SAMPLE_CARD,SAMPLE_CARD,SAMPLE_CARD,SAMPLE_CARD];

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
	res.render('pages/about', { env: ENV,
		title: 'About EBS', subtitle:'Express-Bootstrap-Seed is a project to make deploying brand new websites as painless as possible', cards:SAMPLE_CARDS });
});

/* GET gallery page. */
router.get('/gallery', buildEnv, function(req, res, next) {
	ENV.loc = req.originalUrl;
	res.render('pages/gallery', { env: ENV,
		title: 'Gallery', subtitle:'Khajit has wares, if you have the coin.', cards:SAMPLE_CARDS }
	);
});

router.get('/status', buildEnv, function(req, res, next) {
	res.send({'status':200});
});

module.exports = router;
