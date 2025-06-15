const express = require('express');
const cors = require('cors');
require('dotenv').config();

const subjectsRoutes = require('./routes/subjects');
const questionsRoutes = require('./routes/questions');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/subjects', subjectsRoutes);
app.use('/api/questions', questionsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});