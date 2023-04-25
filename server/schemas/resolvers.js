const { User, Posts } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({
                    _id: context.user._id,
                }).select('-__v -password');
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            //  logs in a user with their email and password.
            const user = await User.findOne({ email });
            // checks if a user with the given email exists in the database.
            if (!user) {
                throw new AuthenticationError('No user found with this email.');
            }
            // checks if the password provided matches the user's password in the database.
            const correctPassword = await user.isCorrectPassword(password);
            if (!correctPassword) {
                throw new AuthenticationError('Incorrect password');
            }
            // generates a JWT for the logged-in user.
            const token = signToken(user);
            return { token, user };
        },
        // adds a new user to the database.
        newUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },

        getUserByName: async (parent, args) => {
            if (args.username) {
                const user = await User.findOne({ username: args.username });
                return { user };
            } else if (args.email) {
                const user = await User.findOne({ email: args.email });
            }
        },

        // CREATE post
        createPost: async (parent, args) => {
            const posts = await Posts.create(args);
            return { posts };
        },

        // UPDATE post
        updatePost: async (parent, { _id, data }) => {
            const posts = await Posts.findOneAndUpdate(
                { _id },
                { $set: data },
                { new: true }
            );
            return { posts };
        },

        // GET post
        getUserPost: async (parent, args) => {
            if (args.userId) {
                const user = await User.findById(args.user).select('-password');
                if (!user) {
                    throw new Error('User not found');
                }
                const posts = await Posts.find({ author: user._id });
                return { user, posts };
            } else if (args.username) {
                const user = await User.findOne({
                    username: args.username,
                }).select('-password');
                if (!user) {
                    throw new Error('User not found');
                }
                const posts = await Posts.find({ author: user._id });
                return { user, posts };
            } else {
                throw new Error('Invalid arguments');
            }
        },

        // DELETE post
        deletePost: async (parent, { _id }) => {
            const posts = await Posts.findByIdAndDelete({ _id });
            return { message: 'Post deleted', success: true };
        },

        // CREATE comment
        createComment: async (parent, args) => {
            const comment = await Comment.create(args);
            return { comment };
        },

        // DELETE comment
        deleteComment: async (parent, { _id }) => {
            const comment = await Comment.findByIdAndDelete(_id);
            return { message: 'Comment deleted', success: true };
        },

        updateComment: async (parent, { _id, comment: commentId }) => {
            const comment = await Posts.findOneAndUpdate(
                { _id },
                { $set: { comment: commentId } },
                { new: true }
            );
            return { comment };
        },
    },
};

module.exports = resolvers;
