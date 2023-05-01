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
                    postId
                    commentText
                    username
                    createdAt
                }
                buddies
                buddylist
            }
        }
    }
`;

export const QUERY_SINGLE_POST = gql`
    query GetUserPost($username: String, $userId: ID) {
        getUserPost(username: $username, userID: $userId) {
            description
            location
            time
            title
            comments {
                commentText
                username
                createdAt
            }
            buddies
            buddylist
        }
    }
`;

export const QUERY_USERNAME = gql`
    query GetUserByName($username: String, $userId: ID) {
        getUserByName(username: $username, userID: $userId) {
            _id
            username
        }
    }
`;
export const QUERY_POSTS = gql`
    query getAllPosts {
        getAllPosts {
            _id
            userId
            username
            title
            description
            time
            location
            comments {
                _id
                postId
                commentText
                username
                createdAt
            }
            buddies
            buddylist
        }
    }
`;
