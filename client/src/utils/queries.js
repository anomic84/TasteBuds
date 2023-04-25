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

export const QUERY_POSTS = gql`
    {
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
`;

export const QUERY_SINGLE_POST = gql`
    query getSinglePost($postId: ID!) {
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
