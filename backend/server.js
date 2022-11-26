// require dotenv
require('dotenv').config();

// require express
const express = require('express');
const repositoryRoutes = require('./routes/repositories');

// express app
const app = express();

app.use(express.json());

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/repositories',repositoryRoutes)

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('Listening on port 4000');
});