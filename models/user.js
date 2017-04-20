var mongoose = require('mongoose');

module.exports = mongoose.model('User',{
	username: String,
	password: String,
	password: String,
	email: String,
	gender: String;
	phone_no :String
});