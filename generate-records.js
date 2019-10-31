const db = require('../db');


return db.databaseTransaction('DELETE FROM author WHERE idauthor = ?', [id]);
