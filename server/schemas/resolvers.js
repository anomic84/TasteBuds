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
        getUserByName: async (parent, args) => {
            console.log(args);
            if (args.username) {
                const user = await User.findOne({ username: args.username });
                console.log(user);
                return user;
            }
        },
        getUserPost: async (parent, args) => {
            console.log(args);
            if (args.userId) {
                const user = await User.findById(args.user).select('-password');
                if (!user) {
                    throw new Error('User not found');
                }
                const posts = await Posts.find({ username: user.username });
                return { user, posts };
            } else if (args.username) {
                const user = await User.findOne({
                    username: args.username,
                }).select('-password');
                if (!user) {
                    throw new Error('User not found');
                }
                const posts = await Posts.find({ username: user.username });
                console.log(user, posts);
                return posts;
            } else {
                throw new Error('Invalid arguments');
            }
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
        newUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },

        createPost: async (parent, args) => {
            const posts = await Posts.create(args);
            console.log(posts);
            return { posts };
        },

        updatePost: async (parent, args) => {
            const postToUpdate = await Posts.findOne({ postId: args._id });
            console.log(postToUpdate);
            if (!postToUpdate) {
                throw new Error('Post not found');
            }
            // Update the post fields with new values
            postToUpdate.title = args.title;
            postToUpdate.description = args.description;
            postToUpdate.time = args.time;
            postToUpdate.location = args.location;

            // Save the updated post
            const updatedPost = await postToUpdate.save();
            console.log(updatedPost);
            return updatedPost;
        },
    },

    // deletePost: async (parent, args, context) => {
    //     const postToDelete = await Posts.findByIdAndDelete({ postId: args._id });
    //     console.log(postToDelete);
    //     return deletePost;
    // },
    // return { message: 'Post deleted', success: true };
    //         createComment: async (parent, args) => {
    //             const comment = await Comment.create(args);
    //             return { comment };
    //         },

    // deleteComment: async (parent, { _id }) => {
    //     const comment = await Comment.findByIdAndDelete(_id);
    //     return { message: 'Comment deleted', success: true };
    // },
};

module.exports = resolvers;
