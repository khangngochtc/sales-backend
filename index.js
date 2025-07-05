const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Sales backend is running');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
