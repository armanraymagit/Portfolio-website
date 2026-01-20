const express = require('express');
const pool = require('./db');

const cors = require('cors');

const app = express();

// Enable CORS for all origins (or restrict to your frontend)
app.use(cors({
  origin: 'http://localhost:5173', // allow only your React app
  methods: ['GET', 'POST'],        // allowed HTTP methods
}));

app.use(express.json());

// Your existing routes...

// Test DB connection
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});

// GET all users
app.get('/Users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "Users"');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});

app.post('/Users', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO "Users" (name, email, message) VALUES ($1, $2, $3) RETURNING *',
      [name, email, message]
    );

    res.status(201).json({
      message: 'User created',
      user: result.rows[0],
    });

  } catch (err) {
    console.error("SQL Error:", err.message);
    res.status(500).json({ error: 'Database error', details: err.message });
  }
});



app.listen(3000, () => {
  console.log('Server running on port 3000');
});
