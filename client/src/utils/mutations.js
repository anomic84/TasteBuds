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
// from graphQL sandbox
export const NEW_USER = gql`
    mutation newUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;
// from graphQL sandbox
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
// from graphQL sandbox
export const UPDATE_POST = gql`
mutation updatePost($description: String, $title: String, $time: String, $location: String, $postId: ID!) {
  updatePost(description: $description, title: $title, time: $time, location: $location, postId: $postId) {
    description
    location
    time
    title
  }
}
`;

export const DELETE_POST = gql`
    mutation deletePost($postId: ID!) {
        deletePost(postId: $postId)
    }
`;

export const DELETE_COMMENT = gql`
mutation deleteComment($commentId: ID!) {
  deleteComment(commentId: $commentId)
}