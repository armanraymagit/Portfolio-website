const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',         // your postgres username
  host: 'localhost',
  database: 'postgres',     // or your database name
  password: 'sqlserveradmin', // the password you set during installation
  port: 8112,                // default port
});

module.exports = pool;
