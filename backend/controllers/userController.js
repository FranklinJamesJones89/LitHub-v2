const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
	return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})
}

// Signin user
const signInUser = async (req, res) => {
	res.json({mssg: 'sign in user'})
}


// Signup user
const signUpUser = async (req, res) => {
	const {avatar, username, email, password} = req.body
	
	try {
			const user = await User.signup(avatar, username, email, password)

		// Create a token
		const token = createToken(user._id)
			
			res.status(200).json({email, token})
	} catch (error) {
		res.status(400).json({error: error.message})
	}
}

module.exports = { signUpUser, signInUser }