const User = require('../models/userModel');

// Signin user
const signInUser = async (req, res) => {
	res.json({mssg: 'sign in user'})
}


// Signup user
const signUpUser = async (req, res) => {
	const {avatar, username, email, password} = req.body
	
	try {
			const user = await User.signup(avatar, username, email, password)
			
			res.status(200).json({email, user})
	} catch (error) {
		res.status(400).json({error: error.message})
	}
}

module.exports = { signUpUser, signInUser }
