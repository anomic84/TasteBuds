const { User } = require('../models')
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user) {
                const userData = await User.findOne(
                    { _id: context.user._id, }
                ).select('-__v -password')
                return userData
            }
            throw new AuthenticationError('Not logged in')
        },
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email })

            if(!user) {
                throw new AuthenticationError('No user found with this email.')
            }
            const correctPassword = await user.isCorrectPassword(password)

            if(!correctPassword) {
                throw new AuthenticationError('Incorrect password')
            }

            const token = signToken(user)

            return { token, user }
        },

        newUser: async (parent, args) => {
            const user = await User.create(args)

            const token = signToken(user)
            return { token, user }
        },
        
    }
    
}