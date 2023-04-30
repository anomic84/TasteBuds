import React, { useState } from 'react';
import { FaCheckSquare, FaCommentAlt } from 'react-icons/fa';
import CommentInput from './CommentInput/CommentInput';
// import { comments } from './../constants/constants'
import CommentCard from './CommentCard';
import EditModal from './EditModal/EditModal';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { CREATE_COMMENT, DELETE_POST } from '../utils/mutations';
import { QUERY_ME, QUERY_POSTS } from '../utils/queries';
// import CommentModal from './CommentModal/CommentModal'

const EventCard = ({
    title,
    description,
    username,
    location,
    time,
    comments,
    postId,
    source,
    client,
}) => {
    // console.log(postId);
    // --------------- COMMENT VALUES AND INPUTS --------------- //

    const [comment] = useMutation(CREATE_COMMENT);

    const [values, setValues] = useState({
        username: '',
        commentText: '',
    });
    const userData = Auth.getProfile();
    const inputs = [
        {
            id: 2,
            name: 'commentText',
            type: 'text',
            placeholder: 'Comment',
            label: 'Comment',
            required: true,
        },
    ];

    // --------------- SIGN UP METHODS --------------- //

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    // ADD COMMENT
    const addComment = async () => {
        try {
            const token = Auth.loggedIn() ? Auth.getToken() : null;

            if (!token) {
                return false;
            }
            const userData = Auth.getProfile();
            // console.log(Auth);

            const { data } = await comment({
                variables: {
                    postId: postId,
                    commentText: values.commentText,
                    username: userData.data.username,
                },
            });

            // console.log(data);
            if (source === 'admin') {
                await client.refetchQueries({ include: [QUERY_ME] });
            } else if (source === 'listing') {
                // console.log('made it');
                await client.refetchQueries({ include: [QUERY_POSTS] });
            }
        } catch (err) {
            console.error(err);
        }
    };

    const onChange = (e) => {
        //console.log(e.target.value)
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    // DELETE POST
    const [deletePost] = useMutation(DELETE_POST, {
        refetchQueries: [{ query: QUERY_ME }],
    });
    function toDateTime(secs) {
        var t = new Date(parseInt(secs)); // Epoch
        //t.setSeconds(parseInt(secs) / 1000);
        return t.toLocaleString();
    }
    const handleDelete = async (postId) => {
        console.log(postId);
        if (!postId) {
            console.log('postId is undefined');
            return;
        }
        deletePost({ variables: { postId: postId.toString() } });
        if (source === 'admin') {
            await client.refetchQueries({ include: [QUERY_ME] });
        } else if (source === 'listing') {
            console.log('made it');
            await client.refetchQueries({ include: [QUERY_POSTS] });
        }
    };

    return (
        <div
            className='flex flex-row items-center drop-shadow-lg w-full bg-card my-4 
        sm:flex-col
        lg:max-w-[900px]
        xl:max-w-[1100px]'
        >
            {/* ------------  TABLETS AND UP ------------ */}
            <div
                className='hidden w-[90%] sm:flex flex-col font-manrope p-4 
            sm:w-full 
                        md:max-w-[600px] md:rounded-3xl md:m-4
                        lg:max-w-[800px]
                        xl:max-w-[1000px]'
            >
                <h1
                    className='text-lg font-bold text-borderblue 
                           lg:text-xl
                           xl:text-2xl'
                >
                    {title}
                </h1>
                <div className='w-[90%] flex flex-col mx-auto'>
                    <p
                        className='text-[10px] text-navtext1
                          lg:text-sm
                          xl:text-base'
                    >
                        Created by {username}
                    </p>
                    <p
                        className='w-full mx-auto py-2 text-sm text-slate-800
                          lg:text-lg lg:py-4
                          xl:text-xl'
                    >
                        {description}
                    </p>
                    <p
                        className='text-right text-[10px] text-navtext1
                          lg:text-sm
                          xl:text-base'
                    >
                        {location}
                    </p>
                    <p
                        className='text-right text-[10px] text-navtext1
                          lg:text-sm
                          xl:text-base'
                    >
                        {toDateTime(time)}
                    </p>
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
                    {/* ---------------ADD COMMENT BUTTON ------------ */}
                    <div className='hidden sm:flex flex-row justify-start'>
                        <button
                            className='mt-4 text-center rounded bg-navbg text-navnametext font-bowlby text-borderblue  w-[40%]  max-w-[180px] p-2 drop-shadow-md
                       sm:w-[25%]
                       xl:text-2xl'
                            onClick={() => addComment()}
                        >
                            Submit
                        </button>

                        <div className='flex flex-row items-center justify-center gap-2 mt-4 ml-4 w-[22.5%] rounded bg-navbg py-1 drop-shadow-md'>
                            <FaCheckSquare
                                className=' text-borderblue'
                                size={30}
                            />
                            <p className='text-2xl font-titan  px-2 rounded text-borderblue'>
                                3
                            </p>
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
            {/* -----------DELETE POST BUTTON -----------*/}
            {userData.data.username === username ? (
                // <button
                //     className='mt-4 text-center rounded bg-navbg text-navnametext font-bowlby text-borderblue  w-[40%]  max-w-[180px] p-2 drop-shadow-md
                //             sm:w-[25%]
                //             xl:text-2xl'
                //     onClick={toggleModal}
                // >
                //     Edit
                // </button>
                <button
                    className='mt-4 text-center rounded bg-navbg text-navnametext font-bowlby text-borderblue  w-[40%]  max-w-[180px] p-2 drop-shadow-md
                       sm:w-[25%]
                       xl:text-2xl'
                    onClick={() => handleDelete(postId)}
                >
                    Delete
                </button>
            ) : (
                <nbsp />
            )}

            {/* -----------UPDATE POST BUTTON ----------- */}
            {userData.data.username === username ? (
                // <button
                //     className='mt-4 text-center rounded bg-navbg text-navnametext font-bowlby text-borderblue  w-[40%]  max-w-[180px] p-2 drop-shadow-md
                //             sm:w-[25%]
                //             xl:text-2xl'
                //     onClick={toggleModal}
                // >
                //     Edit
                // </button>
                <EditModal
                    title={title}
                    description={description}
                    time={time}
                    location={location}
                    postId={postId}
                    client={client}
                    source={source}
                />
            ) : (
                <nbsp />
            )}
            {/* {modal && (
                <div
                    className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
            flex justify-center items-center w-full'
                >
                    <div className='overlay'>
                        <div
                            className='modal-content bg-card border-borderblue border-2 rounded-lg p-4 drop-shadow-xl w-[300px] 
                    sm:w-[400px]
                    xl:w-[800px]'
                        >
                            <div className='xl:py-8'>
                                <h1
                                    className='text-center font-titan text-borderblue text-2xl
                                                xl:text-4xl'
                                >
                                    Create a new event!
                                </h1>
                                <form className='' onSubmit={handleSubmit}>
                                    {postInputs.map((input) => (
                                        <CreateInput
                                            key={input.id}
                                            {...input}
                                            value={values[input.name]}
                                            onChange={onChange}
                                        />
                                    ))}
                                    <div className='flex flex-row justify-center'>
                                        <button
                                            className='mt-4 mx-auto text-center rounded bg-navbg text-navnametext font-bowlby text-borderblue  w-[40%] sm:w-[25%] max-w-[180px] p-2 drop-shadow-md
                                                           xl:text-2xl'
                                            onClick={() => updatePost()}
                                        >
                                            Submit
                                        </button>
                                        <button
                                            className='close-modal mt-4 mx-auto text-center rounded bg-navbg text-navnametext font-bowlby text-borderblue  w-[40%] sm:w-[25%] max-w-[180px] p-2 drop-shadow-md
                                                       xl:text-2xl'
                                            onClick={toggleModal}
                                        >
                                            CLOSE
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}

            {/* ------------  MOBILE ------------ */}

            {/* Left side of card */}
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <div className='w-[90%] flex sm:hidden flex-col font-manrope p-4'>
                        <h1
                            className='text-lg font-bold text-borderblue 
                           lg:text-xl
                           xl:text-3xl'
                        >
                            {title}
                        </h1>
                        <div className='w-[90%] flex flex-col mx-auto'>
                            <p
                                className='text-[10px] text-navtext1
                          lg:text-sm
                          xl:text-lg'
                            >
                                Created by {username}
                            </p>
                            <p
                                className='w-full mx-auto py-2 text-sm text-slate-800
                          lg:text-lg lg:py-4
                          xl:text-2xl'
                            >
                                {description}
                            </p>
                            <p
                                className='text-right text-[10px] text-navtext1
                          lg:text-sm
                          xl:text-lg'
                            >
                                {location}
                            </p>
                            <p
                                className='text-right text-[10px] text-navtext1
                          lg:text-sm
                          xl:text-lg'
                            >
                                {time}
                            </p>
                        </div>
                    </div>
                    {/* <div className='flex w-[10%] flex-col  sm:hidden'> */}
                    {/* How many going */}
                    {/* <div className='flex flex-col items-center py-4'> */}
                    {/* <FaCheckSquare className='text-borderblue' size={27} /> */}
                    {/* TODO: THIS NEEDS TO SWITCH TO {going.count} IF WE DO THIS */}
                    {/* <p className='text-xs text-navtext1'>3</p> */}

                    {/* </div>
                        <div className='flex flex-col items-center py-4'>
                            <FaCommentAlt className='text-borderblue' size={27} /> */}
                    {/* TODO: THIS NEEDS TO SWITCH TO {comment.count} IF WE DO THIS */}
                    {/* <p className='text-xs text-navtext1'>3</p>
                        </div>
                    </div> */}
                </div>

                <div className='mx-auto w-[80%] mb-4 flex sm:hidden'>
                    <form className='w-[100%]' onSubmit={handleSubmit}>
                        {inputs.map((input) => (
                            <CommentInput
                                key={input.id}
                                {...input}
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        ))}
                        <div className='flex flex-row justify-center'>
                            <button
                                className='mt-4 mx-auto text-center rounded bg-navbg text-navnametext font-bowlby text-borderblue  w-[40%] sm:w-[25%] max-w-[180px] p-2 drop-shadow-md
                       xl:text-2xl'
                                type='submit'
                                onClick={() => addComment()}
                            >
                                Submit
                            </button>
                            <button
                                className='close-modal mt-4 mx-auto text-center rounded bg-navbg text-navnametext font-bowlby text-borderblue  w-[40%] sm:w-[25%] max-w-[180px] p-2 drop-shadow-md
                   xl:text-2xl'
                            >
                                CLOSE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
