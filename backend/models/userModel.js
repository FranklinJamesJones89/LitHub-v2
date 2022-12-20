const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	avatar: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
})

// Static signup method
userSchema.statics.signup = async function(avatar, username, email, password) {

	// Validation
	if (!email || !password ) {
		throw Error('All fields must be filled')
	}
	if (!validator.isEmail(email)) {
		throw Error('Email is not valid')
	}
	if (!validator.isStrongPassword(password)) {
		throw Error('Password not strong enough')
	}
	
	const exists = await this.findOne({ email })

	if (exists) {
		throw Error('Email already exists')
	}
	
	const salt = await bcrypt.genSalt(10)
	const hash = await bcrypt.hash(password, salt)

	const user = await this.create({ avatar, username, email, password: hash })

	return user
}

// static signin method
userSchema.statics.signin = async function(email, password) {
	if (!email || !password) {
		throw Error('All fields must be filled')
	}	
}


module.exports = mongoose.model('User', userSchema)
