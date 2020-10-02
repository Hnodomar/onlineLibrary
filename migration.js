const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./bigdb.sqlite');

db.serialize( () => {
	db.run("DROP TABLE IF EXISTS Books");
	db.run("CREATE TABLE Books (id INTEGER NOT NULL PRIMARY KEY, isbn TEXT NOT NULL, available TEXT NOT NULL)");
});
