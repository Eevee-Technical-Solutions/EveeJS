const { Pool } = require('pg');
const myURI =
  'postgres://fllktuqw:TNh_VlfBY3FoS0IHBR8O7jakG89B2vFl@chunee.db.elephantsql.com/fllktuqw';

const URI = myURI;

const pool = new Pool({
  connectionString: URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
