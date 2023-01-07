const express = require('express');

// Controller Functions
const { signUpUser, signInUser } = require('../controllers/userController')

const router = express.Router();

// Sign in route
router.post('/signin', signInUser)

// Sign up route
router.post('/signup', signUpUser)

module.exports = router;
