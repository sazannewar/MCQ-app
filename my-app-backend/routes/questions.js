const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/:subjectId', async (req, res) => {
  const { subjectId } = req.params;
  try {
    const result = await pool.query(
      'SELECT * FROM questions WHERE subject_id = $1',
      [subjectId]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).send('Error fetching questions');
  }
});

module.exports = router;
