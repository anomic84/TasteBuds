import React, { useState } from 'react'
import { FaCheckSquare, FaCommentAlt } from 'react-icons/fa'
import CommentInput from './CommentInput/CommentInput'
import { comments } from './../constants/constants'
import CommentCard from './CommentCard'


// import CommentModal from './CommentModal/CommentModal'

const EventCard = ({ title, description, username, location, time }) => {


   

    // --------------- COMMENT VALUES AND INPUTS --------------- //
    const [values, setValues] = useState({
        username: '',
        commentText: '',
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            label: "Username",
            required: true,
        },
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

    const onChange = (e) => {
        console.log(e.target.value)
        setValues({ ...values, [e.target.name]: e.target.value })
    }


    return (

        <div className='flex flex-row items-center drop-shadow-lg w-full bg-card my-4 
        sm:flex-col
        lg:max-w-[900px]
        xl:max-w-[1100px]'>
            {/* ------------  TABLETS AND UP ------------ */}
            {/* TODO: link these params to backend */}
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
                          xl:text-base'>{time}</p>
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
                    <div className='hidden sm:flex flex-row justify-start'>
                        <button className='mt-4 text-center rounded bg-navbg text-navnametext font-bowlby text-borderblue  w-[40%]  max-w-[180px] p-2 drop-shadow-md
                       sm:w-[25%]
                       xl:text-2xl'>
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

            {/* Left side of card */}
            <div className='flex flex-col'>
                <div className='flex flex-row'>
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
                          xl:text-lg'>{time}</p>
                        </div>
                    </div>
                    <div className='flex w-[10%] flex-col  sm:hidden'>
                        {/* How many going */}
                        <div className='flex flex-col items-center py-4'>
                            <FaCheckSquare className='text-borderblue' size={27} />
                            {/* TODO: THIS NEEDS TO SWITCH TO {going.count} IF WE DO THIS */}
                            <p className='text-xs text-navtext1'>3</p>

                        </div>
                        <div className='flex flex-col items-center py-4'>
                            <FaCommentAlt className='text-borderblue' size={27} />
                            {/* TODO: THIS NEEDS TO SWITCH TO {comment.count} IF WE DO THIS */}
                            <p className='text-xs text-navtext1'>3</p>
                        </div>
                    </div>
                </div>

                <div className='mx-auto w-[80%] mb-4 flex sm:hidden'>
                    <form className='' onSubmit={handleSubmit}>

                        {inputs.map((input) => (
                            <CommentInput
                                key={input.id}
                                {...input}
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        ))}
                        <div className='flex flex-row justify-center'>
                            <button className='mt-4 mx-auto text-center rounded bg-navbg text-navnametext font-bowlby text-borderblue  w-[40%] sm:w-[25%] max-w-[180px] p-2 drop-shadow-md
                       xl:text-2xl'>
                                Submit</button>
                            <button
                                className='close-modal mt-4 mx-auto text-center rounded bg-navbg text-navnametext font-bowlby text-borderblue  w-[40%] sm:w-[25%] max-w-[180px] p-2 drop-shadow-md
                   xl:text-2xl'
                            >CLOSE
                            </button>
                        </div>
                    </form>
                </div >
            </div >

        </div >
    )
}

export default EventCard