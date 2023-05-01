const { User, Posts } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({
                    username: context.user.username,
                })
                    .populate('posts')
                    .select('-__v -password');
                //console.log(context.user);
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
        // READ
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
        getAllPosts: async (parent, args) => {
            const posts = await Posts.find();
            console.log(posts);
            return posts;
        },
    },

    Mutation: {
        // FIXME: needs to be tested again with encryption on front end
        login: async (parent, { username, password }) => {
            //  logs in a user with their email and password.
            const user = await User.findOne({ username });
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
        // CREATE
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

        createComment: async (parent, { postId, commentText, username }) => {
            return Posts.findOneAndUpdate(
                { _id: postId },
                {
                    $addToSet: { comments: { commentText, username } },
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },

        // UPDATE
        updatePost: async (parent, args) => {
            const postToUpdate = await Posts.findOneAndUpdate(
                { _id: args.postId },
                {
                    title: args.title,
                    description: args.description,
                    time: args.time,
                    location: args.location,
                    buddies: args.buddies,
                    buddylist: args.buddylist,
                }
            );
            console.log(postToUpdate);
            if (!postToUpdate) {
                throw new Error('Post not found');
            }
            // Update the post fields with new values
            // postToUpdate.title = args.title;
            // postToUpdate.description = args.description;
            // postToUpdate.time = args.time;
            // postToUpdate.location = args.location;

            // Save the updated post
            // const updatedPost = await postToUpdate.save();
            // console.log(updatedPost);
            return postToUpdate;
        },

        // DELETE
        deleteComment: async (parent, { postId, commentId }) => {
            console.log('Comment deleted');
            return Posts.findOneAndUpdate(
                { _id: postId },
                { $pull: { comments: { _id: commentId } } },
                { new: true }
            );
        },

        deletePost: async (parent, { postId }) => {
            console.log('Post deleted');
            return Posts.findOneAndDelete({ _id: postId });
        },
    },
};

// testing code
// createComment: async (_, { postId, body }, context) => {
//     const { username } = checkAuth(context);
//     if (body.trim() === '') {
//         throw new UserInputError('Empty comment', {
//             errors: {
//                 body: 'Comment body must not be empty',
//             },
//         });
//     }

//     const post = await Post.findById(postId);

//     if (post) {
//         post.comments.unshift({
//             body,
//             username,
//             createdAt: new Date().toISOString(),
//         });
//         await post.save();
//         return post;
//     } else {
//         throw new UserInputError('Post not found');
//     }
// },

module.exports = resolvers;
