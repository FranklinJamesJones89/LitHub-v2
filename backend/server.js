// require dotenv
require('dotenv').config();

// require express
const express = require('express');
const mongoose = require('mongoose');
const repositoryRoutes = require('./routes/repositories');
const userRoutes = require('./routes/user');
const multer = require('multer');

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
app.use('/api/user/', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
        console.log('Connect to db and listening on port', process.env.PORT);
    });
})
.catch((error) => {
    console.log(error);
});
