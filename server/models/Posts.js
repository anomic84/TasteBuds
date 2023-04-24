const { Schema, model } = require('mongoose');
const moment = require('moment'); // import the moment library

const commentSchema = new Schema(
    {
        commentText: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) =>
                moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a'),
        },
    },

    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

const postsSchema = new Schema({
    username: {
        type: String,
        required: true,
        ref: 'User',
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        minlength: 1,
        maxLength: 500,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        
    },
    time: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    comments: [commentSchema],
});

const Posts = model('Posts', postsSchema);

module.exports = Posts;
