import React from 'react'
// import Auth from '../utils/auth';
// import { useMutation } from '@apollo/client';
// import { DELETE_COMMENT} from '../utils/mutations';
// import { QUERY_ME} from '../utils/queries';
const CommentCard = ({ username, commentText }) => {

 // DELETE COMMENT
//    const [deleteComment] = useMutation(DELETE_COMMENT, {
//        refetchQueries: [{ query: QUERY_ME }],
//     });
    
//     const handleDelete = (commentId) => {
//         console.log(commentId);
//         if (!commentId) {
//             console.log("postId is undefined");
//             return;
//         }
//         deleteComment({ variables: { commentId: commentId.toString() } });
//     };
 
 


    return (
       <div className="flex flex-col w-full m-4 bg-navbg drop-shadow-lg rounded p-4 font-manrope ">
        <p className='text-left text-borderblue w-full py-2 text-base 
                          lg:text-lg lg:py-1
                          xl:text-xl'>"{commentText}"</p>
                          {/* TODO: Make username a link to users profile */}
        <p className='text-left pl-3 text-xs text-navtext1
                          lg:text-sm
                          xl:text-base'>- {username}</p>
                    {/* DELETE COMMENT BUTTON */}
                 {/* <button className='close-modal mt-4 mx-auto text-center rounded bg-navbg text-navnametext font-bowlby text-borderblue  w-[40%] sm:w-[25%] max-w-[180px] p-2 drop-shadow-md xl:text-2xl' onClick={() => handleDelete(commentId)}>DELETE
                                        </button> */}
       </div> 
    )
};

export default CommentCard