const { Schema, model, default: mongoose } = require('mongoose');
const moment = require('moment'); // import the moment library

const commentSchema = new Schema(
    {
        // FIXME: added commentId
        // commentId: {
        //     type: mongoose.ObjectId,
        //     default: () => new mongoose.Types.ObjectId(),
        // },
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
        // FIXME: added timestamps options here
        // timestamps,
        timestamps: true,
        toJSON: {
            // virtuals: true,
            getters: true,
        },
        id: false,
    }
);

const postsSchema = new Schema(
    {
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
        buddies: {
            type: Number,
            required: true,
        },
        buddylist: {
            type: [String],
        },
        // nested comments created within the commentSchema
        comments: [commentSchema],
    },
    {
        // FIXME: added timestamps options here
        // timestamps,
        timestamps: true,
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

const Posts = model('Posts', postsSchema);

module.exports = Posts;
