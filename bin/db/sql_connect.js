/*	sql_connect.js

	For Indian Hills Community College
	Parking On Hills, https://parking.indianhils.edu
	by Blaine Harper

	PURPOSE: Script to setup connection with SQL DATABASE for API.

	SQL DATABASE configuration for server.js
	Make sure to leave the password value null 
	DONT SAVE THE DATABASE PASSWORD TO GITHUB
*/	

var mysql = require('mysql');
require('dotenv').config();

var con = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_DB
});

con.connect(function(error){
	if(error){
		throw error;
	} else {
		console.log('MySQL Database is connected successfully');
	}
});

module.exports = con;
