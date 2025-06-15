const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM subjects');
    res.json(result.rows);
  } catch (err) {
    res.status(500).send('Error fetching subjects');
  }
});

module.exports = router;
