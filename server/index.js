const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;
const router = require('./router');

app.use(express.json()).use(router);

app.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log(`Server listening on port ${PORT}`);
});
