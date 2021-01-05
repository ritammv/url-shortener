const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const router = require('./router');
const connectDB = require('./db.js');

const app = express();
connectDB();
app.use(cors());
app.use(express.json({ extended: false }));
app.use(router);

app.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log(`Server listening on port ${PORT}`);
});
