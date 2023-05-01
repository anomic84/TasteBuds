import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;
// CREATE
export const NEW_USER = gql`
    mutation newUser($username: String!, $email: String!, $password: String!) {
        newUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const CREATE_POST = gql`
    mutation createPost(
        $title: String!
        $description: String!
        $location: String!
        $time: String
        $username: String!
        $buddies: Int!
        $buddylist: [String!]
    ) {
        createPost(
            title: $title
            description: $description
            location: $location
            time: $time
            username: $username
            buddies: $buddies
            buddylist: $buddylist
        ) {
            title
            description
            location
            time
            username
            buddies
            buddylist
        }
    }
`;

export const CREATE_COMMENT = gql`
    mutation CreateComment(
        $postId: ID!
        $commentText: String!
        $username: String
    ) {
        createComment(
            postId: $postId
            commentText: $commentText
            username: $username
        ) {
            commentText
            createdAt
            username
        }
    }
`;

// UPDATE
export const UPDATE_POST = gql`
    mutation updatePost(
        $description: String
        $title: String
        $time: String
        $location: String
        $postId: ID!
        $buddies: Int
        $buddylist: [String]
    ) {
        updatePost(
            description: $description
            title: $title
            time: $time
            location: $location
            postId: $postId
            buddies: $buddies
            buddylist: $buddylist
        ) {
            description
            location
            time
            title
            buddies
            buddylist
        }
    }
`;
//  DELETE
export const DELETE_POST = gql`
    mutation deletePost($postId: ID!) {
        deletePost(postId: $postId) {
            _id
            username
            title
            description
            time
            location
        }
    }
`;
export const DELETE_COMMENT = gql`
    mutation deleteComment($postId: ID!, $commentId: ID!) {
        deleteComment(postId: $postId, commentId: $commentId) {
            comments {
                commentText
                postId
                _id
                username
                createdAt
            }
        }
    }
`;
