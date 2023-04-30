import React from 'react';
// import Auth from '../utils/auth';
// import { useMutation } from '@apollo/client';
import { DELETE_COMMENT } from '../utils/mutations';
// import { QUERY_ME} from '../utils/queries';import {DELETE_COMMENT} from '../utils/mutations'
// import { QUERY_ME, QUERY_POSTS } from '../utils/queries';
// import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';

const CommentCard = ({
    username,
    commentText,
    source,
    client,
    postId,
    commentId,
}) => {
    //    const [deleteComment] = useMutation(DELETE_COMMENT, {
    //        refetchQueries: [{ query: QUERY_ME }],
    //     });

    // const handleDelete = (commentId) => {
    //     console.log(commentId);
    //     if (!commentId) {
    //         console.log("postId is undefined");
    //         return;
    //     }
    //     deleteComment({ variables: { commentId: commentId.toString() } });
    // };

    const [comment] = useMutation(DELETE_COMMENT);
    // TODO: deleteComment
    const deleteComment = async () => {};
    return (
        <div className='flex flex-col w-full m-4 bg-navbg drop-shadow-lg rounded p-4 font-manrope '>
            <p
                className='text-left text-borderblue w-full py-2 text-base 
                          lg:text-lg lg:py-1
                          xl:text-xl'
            >
                "{commentText}"
            </p>
            {/* TODO: Make username a link to users profile */}
            <div className='flex flex-row items-center justify-between'>
                <p
                    className='text-left pl-3 text-sm text-navtext1
                          lg:text-base
                          xl:text-lg'
                >
                    - {username}
                </p>
                {/* DELETE COMMENT BUTTON */}

                <button
                    className='mt-4 text-center rounded bg-borderblue text-navnametext font-bowlby text-navtext2  w-[30%]  max-w-[180px] p-1 drop-shadow-md
                       sm:w-[25%]
                       xl:text-2xl'
                    onClick={() => deleteComment()}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default CommentCard;
