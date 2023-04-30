import React, { useState } from 'react'
import { FaCheckSquare, FaCommentAlt } from 'react-icons/fa'
import CommentInput from './CommentInput/CommentInput'
// import { comments } from './../constants/constants'
import CommentCard from './CommentCard'

import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { CREATE_COMMENT, DELETE_COMMENT, DELETE_POST, UPDATE_POST } from '../utils/mutations';
import { QUERY_ME, QUERY_POSTS } from '../utils/queries';
// import CommentModal from './CommentModal/CommentModal'

const EventCard = ({ title, description, username, location, time, comments, postId, source, client }) => {


    // --------------- COMMENT VALUES AND INPUTS --------------- //
    const [values, setValues] = useState({
        username: '',
        commentText: '',
    });
    const [comment] = useMutation(CREATE_COMMENT);
    const inputs = [

        {
            id: 2,
            name: "commentText",
            type: "text",
            placeholder: "Comment",
            label: "Comment",
            required: true,
        },
    ]

    // --------------- SIGN UP METHODS --------------- //

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    // add comment
    const addComment = async () => {
        console.log(postId);
        try {
            const token = Auth.loggedIn() ? Auth.getToken() : null;

            if (!token) {
                return false;
            }
            const userData = Auth.getProfile();
            console.log(Auth);

            const { data } = await comment({
                variables: {
                    postId: postId,
                    commentText: values.commentText,
                    username: userData.data.username
                },
            });

            console.log(data)
            if (source === "admin") {
                await client.refetchQueries({ include: [QUERY_ME] })
            } else if (source === "listing") {
                console.log('made it')
                await client.refetchQueries({ include: [QUERY_POSTS] })
            }

        } catch (err) {
            console.error(err);
        }
    };

   

    // TODO: editPost
    const editPost = async () => {

    }

    // TODO: deletePost
    const deletePost = async () => {

    }



    const onChange = (e) => {
        //console.log(e.target.value)
        setValues({ ...values, [e.target.name]: e.target.value })

    }


    return (

        <div className='flex flex-row items-center drop-shadow-lg w-full bg-card my-4 
        sm:flex-col
        lg:max-w-[900px]
        xl:max-w-[1100px]'>
            {/* ------------  TABLETS AND UP ------------ */}
            <div className='hidden w-[90%] sm:flex flex-col font-manrope p-4 
            sm:w-full 
                        md:max-w-[600px] md:rounded-3xl md:m-4
                        lg:max-w-[800px]
                        xl:max-w-[1000px]'>

                <h1 className='text-lg font-bold text-borderblue 
                           lg:text-xl
                           xl:text-2xl'>{title}</h1>
                <div className='w-[90%] flex flex-col mx-auto'>
                    <p className='text-[10px] text-navtext1
                          lg:text-sm
                          xl:text-base'>Created by {username}</p>
                    <p className='w-full mx-auto py-2 text-sm text-slate-800
                          lg:text-lg lg:py-4
                          xl:text-xl'>{description}</p>
                    <p className='text-right text-[10px] text-navtext1
                          lg:text-sm
                          xl:text-base'>{location}</p>
                    <p className='text-right text-[10px] text-navtext1
                          lg:text-sm
                          xl:text-base'>{Date(time)}</p>
                </div>
                <div className='hidden sm:flex flex-row justify-between my-2'>
                    <button className='mt-4 text-center rounded bg-navbg text-navnametext font-bowlby text-borderblue  w-[40%]  max-w-[180px] p-2 drop-shadow-md
                       sm:w-[25%]
                       xl:text-2xl' onClick={() => editPost()}>
                        {/* onClick={() => editPost()} */}
                        Edit
                    </button>
                    <button className='mt-4 text-center rounded bg-navbg text-navnametext font-bowlby text-borderblue  w-[40%]  max-w-[180px] p-2 drop-shadow-md
                       sm:w-[25%]
                       xl:text-2xl' onClick={() => deletePost()}>
                        {/* onClick={() => deletePost()} */}
                        Delete
                    </button>
                </div>

                {/* ------------  COMMENT INPUT  ------------ */}

                <form className='' onSubmit={handleSubmit}>
                    {inputs.map((input) => (
                        <CommentInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    <div className='hidden sm:flex flex-row justify-between'>
                        <button className='mt-4 text-center rounded bg-navbg text-navnametext font-bowlby text-borderblue  w-[40%]  max-w-[180px] p-2 drop-shadow-md
                       sm:w-[25%]
                       xl:text-2xl' onClick={() => addComment()}>
                            Submit
                        </button>
                        <div className='flex flex-row items-center justify-center gap-2 mt-4 ml-4 w-[22.5%] rounded bg-navbg py-1 drop-shadow-md'>
                            <FaCheckSquare className=' text-borderblue' size={30} />
                            {/* TODO: THIS NEEDS TO SWITCH TO {going.count} IF WE DO THIS */}
                            <p className='text-2xl font-titan  px-2 rounded text-borderblue'>3</p>
                        </div>
                     
                    </div>
                </form>

                {/* ------------ LIST OF COMMENTS  ------------ */}

                <div className='hidden sm:m-4 sm:flex flex-col items-center'>
                    {comments.map((comment) => (
                        <CommentCard key={comment.id} {...comment} />
                    ))}
                </div>
            </div>


            {/* ------------  MOBILE ------------ */}


            <div className='flex flex-col mx-auto'>
                {/* <div className='flex flex-row'> */}
                <div className='w-[90%] flex sm:hidden flex-col font-manrope p-4'>

                    <h1 className='text-lg font-bold text-borderblue 
                           lg:text-xl
                           xl:text-3xl'>{title}</h1>
                    <div className='w-[90%] flex flex-col mx-auto'>
                        <p className='text-[10px] text-navtext1
                          lg:text-sm
                          xl:text-lg'>Created by {username}</p>
                        <p className='w-full mx-auto py-2 text-sm text-slate-800
                          lg:text-lg lg:py-4
                          xl:text-2xl'>{description}</p>
                        <p className='text-right text-[10px] text-navtext1
                          lg:text-sm
                          xl:text-lg'>{location}</p>
                        <p className='text-right text-[10px] text-navtext1
                          lg:text-sm
                          xl:text-lg'>{Date(time)}</p>
                    </div>
                    <div className='flex sm:hidden flex-row justify-between my-2'>
                        <button className='mt-4 text-center rounded bg-navbg text-navnametext font-bowlby text-borderblue  w-[40%]  max-w-[180px] p-2 drop-shadow-md
                       sm:w-[25%]
                       xl:text-2xl' onClick={() => editPost()}>
                            Edit
                        </button>
                        <button className='mt-4 text-center rounded bg-navbg text-navnametext font-bowlby text-borderblue  w-[40%]  max-w-[180px] p-2 drop-shadow-md
                       sm:w-[25%]
                       xl:text-2xl' onClick={() => deletePost()}>
                            Delete
                        </button>
                    </div>
                </div>
                {/* </div> */}


                {/* COMMENT AREA */}
                <div className='w-[90%] flex sm:hidden flex-col font-manrope p-4'>
                    <form className='w-[100%]' onSubmit={handleSubmit}>

                        {inputs.map((input) => (
                            <CommentInput
                                key={input.id}
                                {...input}
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        ))}
                        <div className='flex flex-row justify-between my-2'>
                            <button className='mt-4 text-center rounded bg-navbg text-navnametext font-bowlby text-borderblue  w-[40%] sm:w-[25%] max-w-[180px] p-2 drop-shadow-md
                       xl:text-2xl' type="submit" onClick={() => addComment()} >
                                Submit
                            </button>
                        

                        </div>
                    </form>
                    {/* ------------ LIST OF COMMENTS  ------------ */}

                    <div className='flex sm:m-4 sm:hidden flex-col items-center'>
                        {comments.map((comment) => (
                            <CommentCard key={comment.id} {...comment} />
                        ))}
                    </div>
                </div>
            </div >
        </div >


    )
}

export default EventCard