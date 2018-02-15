// Requirements
const express = require("express");
const app = module.exports = express();
const port = 8080;
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const path = require('path');
const morgan = require('morgan');

// Server
const server = app.listen(port, () => {
	console.log("--ONLINE Port: " + port + "--");
});

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static("build"));

// Routes
require('./routes/auth.js')(app);
require('./routes/routes.js')(app);