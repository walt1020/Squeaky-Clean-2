//const db = require('../config/db');
const path = require('path');

module.exports = (app, db) => {
		app.get('/' , (req, res) => {
			res.sendFile(path.join(__dirname, "../build/index.html"));
		});
		app.post('/service' , (req, res) => {
			let data=req.body;
			console.log(data);
			res.send("Your service has been scheduled. Thank you!")
		});
		app.post('/contact' , (req, res) => {
			let data=req.body;
			console.log(data);
			res.send("Thank you for your feedback!")
		});
}