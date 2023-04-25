import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            posts {
                _id
                username
                title
                description
                time
                location
                comments {
                    _id
                    commentText
                    username
                    createdAt
                }
            }
        }
    }
`;


export const QUERY_SINGLE_POST = gql`
    query getUserPost($postId: ID!) {
        posts(postId: $postId) {
            _id
            username
            title
            description
            time
            location
            comments {
                _id
                commentText
                username
                createdAt
            }
        }
    }
`;
export const QUERY_USERNAME = gql`
    query getUserByName($postId: ID!) {
        posts(postId: $postId) {
            _id
            username
            title
            description
            time
            location
            comments {
                _id
                commentText
                username
                createdAt
            }
        }
    }
`;
