const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 255,
		unique: true
	},
	password: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 255
	}
});

const User = mongoose.model("User", userSchema);

function validate(user) {
	const schema = {
		email: Joi.string()
			.min(5)
			.max(255)
			.required()
			.email(),
		password: Joi.string()
			.min(5)
			.max(255)
			.required()
	};

	return Joi.validate(user, schema);
}

module.exports.User = User;
module.exports.validate = validate;
