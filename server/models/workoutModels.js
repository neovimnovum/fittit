const { Pool } = require('pg');

const pool = new Pool({
  user: 'pi',
  host: 'raspberrypi.local',
  database: 'fitnessdb',
  password: 'alabastersunshine',
  port: 5432,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
