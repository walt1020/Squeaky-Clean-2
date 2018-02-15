const mysql = require('mysql');



if (process.env.JAWSDB_URL) {
	const db = mysql.createConnection(process.env.JAWSDB_URL);
}
else(
	const db = mysql.createConnection({
      host: "scdb.cx9vfnsthqml.us-east-2.rds.amazonaws.com",
      user: "master",
      password: "password",
      database: "scdb",
      port: 3306
	});
)

module.exports = db;
