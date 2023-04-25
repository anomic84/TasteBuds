const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
        getUserByName(username: String, userID: ID): User
        getUserPost(username: String, userID: ID): [Posts]
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
            userId: ID!
            title: String!
            description: String!
            time: String
            location: String!
        ): Posts
        updatePost(
            postId: ID!
            title: String
            description: String
            time: String
            location: String
        ): Posts
        deletePost(postId: ID!): Boolean
        createComment(
            postId: ID!
            commentText: String!
            username: String!
        ): Comment
        updateComment(_id: ID!, comment: ID!): Posts
        deleteComment(commentId: ID!): Boolean
    }
`;

module.exports = typeDefs;
