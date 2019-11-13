const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

//this will handle the connection to the postgresql
const Pool = require('pg').Pool;
const pool = new Pool({
	user: 'zizoh',
	host: 'localhost',
	database: 'teamsdb',
	password: '',
	port: 5432
});
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use((req, res) => {
	res.json({message: 'Your request was successful!'});
})


module.exports = app;