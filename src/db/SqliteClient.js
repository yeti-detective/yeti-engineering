const sqlite3 = require("sqlite3").verbose();

const CREATE_TABLE_SQL = `
	CREATE TABLE IF NOT EXISTS Likes (
		_id INTEGER PRIMARY KEY
		likes INTEGER
	)
`

class SQLiteClient {
	constructor(dbName) {
		this.db = new sqlite3.Database(dbName)
	}
	
	createLikesTable() {
		this.db.all(CREATE_TABLE_SQL);
	}
	
	getLikes() {
		let likes;
		this.db.get("SELECT likes FROM Likes")
		
	}
}

module.exports = SQLiteClient;
