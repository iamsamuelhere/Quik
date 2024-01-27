const express = require('express');
const app = express();
const PORT = 3000;

//routes
const indexRoute = require('./routes/indexRoute.js');
//middlewares
app.use('/', indexRoute);

app.listen(PORT, () => {
  console.log('Server has started');
});


