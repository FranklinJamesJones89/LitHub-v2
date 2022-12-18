const user = require('../models/userModel');

// Login user
const signInUser = async (req, res) => {
	res.json({mssg: 'sign in user'})
}

const signUpUser = async (req, res) => {
	res.json({mssg: 'sign up user'})
}

module.exports = { signUpUser, signInUser }
