const { Pool } = require('pg');

const pool = new Pool({
  user: '',         // your postgres username
  host: '',
  database: '',     // or your database name
  password: '', // the password you set during installation
  port: 8000,                // default port
});

module.exports = pool;

