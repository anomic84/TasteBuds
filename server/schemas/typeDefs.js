const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
        users: [User]!
        user(userId: ID!): User
    }

    type User {
        _id: ID
        username: String
        email: String
        posts: [Posts]
    }

    type Posts {
        username: String!
        title: String!
        description: String!
        createdAt: String
        time: String!
        location: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        newUser(username: String!, email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
