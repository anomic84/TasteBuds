import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;
// GET
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
// CREATE
export const CREATE_POST = gql`
    mutation createPost(
        $title: String!
        $description: String!
        $location: String!
        $time: String
        $username: String!
    ) {
        createPost(
            title: $title
            description: $description
            location: $location
            time: $time
            username: $username
        ) {
            title
            description
            location
            time
            username
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
    ) {
        updatePost(
            description: $description
            title: $title
            time: $time
            location: $location
            postId: $postId
        ) {
            description
            location
            time
            title
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
