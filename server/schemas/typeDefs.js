const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Query {
        me: User
        users: [user]!
        user(userId: ID!): User
    }

    type User {
        _id: ID
        username: String
        email: String
        posts: [Posts]
    }

    type Posts {
        username: String
        title: String
        description: String
        createdAt: Date
        time: Date
        location: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        newUser(username: String!, email: String!, password: String!)" Auth
    }
`

module.exports = typeDefs