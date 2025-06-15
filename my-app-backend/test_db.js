const pool = require('./db');

pool
  .query('SELECT NOW()')
  .then(res => {
    console.log('✅ DB Connected:', res.rows[0]);
    process.exit();
  })
  .catch(err => {
    console.error('❌ DB Connection Error:', err.message);
    process.exit(1);
  });
