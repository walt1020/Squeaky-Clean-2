//const db = require('../config/db');
const path = require('path');

module.exports = (app, db) => {
		app.get('/' , (req, res) => {
			res.sendFile(path.join(__dirname, "../build/index.html"));
		});
}