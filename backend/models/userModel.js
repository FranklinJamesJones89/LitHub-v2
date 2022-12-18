const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	avatar: {
		type: String,
		required: true,
	},
	firstname: {
		type: String,
		required: true
	},
	lastname: {
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
userSchema.statics.signup = async () => {
	
}

module.exports = mongoose.model('User', userSchema)
