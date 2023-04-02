// TODO: Import express
const express = require('express');
const publicRoutes = require('./routes/html');
const apiRoutes = require('./routes/api')

const app = express();
const host = '0.0.0.0';

const PORT = 3002;
//
// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use('/', publicRoutes);
app.use('/api', apiRoutes);

// TODO: Create a route for a GET request that will return the content of our `terms.json` file

app.listen(PORT, host, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

