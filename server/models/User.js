const { Schema, model, Types } = require('mongoose');
const { postsSchema } = require('./Posts');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trimmed: true,
        // email: {
        //     validate: [isEmail, 'invalid email'],
        // },
        validate: [isEmail, 'invalid email'],
    },
    password: {
        type: String,
        required: true,
        // unique: true,
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Posts',
        },
    ],
    // posts: [postsSchema],
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
