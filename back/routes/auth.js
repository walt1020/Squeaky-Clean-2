const db = require('../config/db');

module.exports = (app) => {
	app.post('/signup', (req, res) => {
		let data = {
			email: req.body.email,
			password: req.body.password
		}
		db.query('SELECT * FROM users WHERE email="' + data.email + '"', (err, rows) => {
			if(err) {
				res.send({err: 'There was a problem.'})
			} else {
				if(rows.length) {
					res.send({err: 'User already exists.'})
				} else {
					db.query("INSERT INTO users SET ? ", data, (err, rows) => {
						if(err) {
							res.send({err: 'There was a problem'})
						} else {
							res.send({success: 'You have successfully signed up.'});
						}
					});
				}
			}
		})
	});

	app.post('/login', (req, res) => {
		let data = {
			email: req.body.email,
			password: req.body.password
		}
		db.query('SELECT * FROM users WHERE email="' + data.email  +'"', (err, rows) =>{
			if(err) {
				res.send({err: 'There was a problem.'})
			} else {
				if(!rows.length) {
					res.send({err: 'User does not exist'})
				} else {
					if(data.password !== rows[0].password) {
						res.send({err: 'Password Incorrect'})
					} else {
						res.send({success: 'You have successfully logged in.'});
					}
				}
			}
		});
	});
}
