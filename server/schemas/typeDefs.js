const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
        getUserByName(username: String, userID: ID): User
        getUserPost(username: String, userID: ID): [Posts]
        getAllPosts: [Posts]
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        posts: [Posts]
    }

    type Posts {
        _id: ID
        userId: ID
        username: String
        title: String
        description: String
        time: String
        location: String
        comments: [Comment]
    }

    type Comment {
        _id: ID
        postId: ID
        commentText: String
        username: String
        createdAt: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        newUser(username: String!, email: String!, password: String!): User
        createPost(
            userId: ID
            username: String!
            title: String!
            description: String!
            time: String
            location: String!
        ): Posts
        createComment(
            postId: ID!
            commentText: String!
            username: String
        ): Comment
        updatePost(
            postId: ID!
            title: String
            description: String
            time: String
            location: String
        ): Posts
        deleteComment(postId: ID!, commentId: ID!): Posts
        deletePost(postId: ID!): Posts

        # updateComment(_id: ID!, comment: ID!): Posts
        # updateUser(username: String, email: String, password: String): User
    }
`;

module.exports = typeDefs;
