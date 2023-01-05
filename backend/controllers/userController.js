const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createToken = (_id) => {
	return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})
}

// Signin user
const signInUser = async (req, res) => {
	const {username, email, password} = req.body

	try {
			const user = await User.signin(username, email, password)

		// Create a token
		const token = createToken(user._id)
			
		res.status(200).json({username, email, token})
	} catch (error) {
		res.status(400).json({error: error.message})
	}
}


// Signup user
const signUpUser = async (req, res) => {
	const {username, email, password} = req.body
	
	try {
			const user = await User.signup(username, email, password)

		// Create a token
		const token = createToken(user._id)
			
		res.status(200).json({username, email, token})
	} catch (error) {
		res.status(400).json({error: error.message})
	}
}



module.exports = { signUpUser, signInUser }
