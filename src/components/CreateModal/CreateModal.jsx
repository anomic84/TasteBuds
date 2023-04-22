import React, { useState } from 'react'
import CreateInput from './CreateInput';

const CreateModal = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    // --------------- EVENT VALUES AND INPUTS --------------- //
    const [values, setValues] = useState({
        username: '',
        title: '',
        description: '',
        time: '',
        createdAt: '',
        location: '',
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
            name: "title",
            type: "text",
            placeholder: "Title",
            label: "Title",
            required: true,
        },
        {
            id: 3,
            name: "description",
            type: "text",
            placeholder: "Description",
            label: "Description",
            required: true,
        },
        {
            id: 4,
            name: "time",
            type: "text",
            placeholder: "Time",
            label: "Time",
            required: true,
        },
        {
            id: 5,
            name: "createdAt",
            type: "text",
            placeholder: "Created At",
            label: "Created At",
            required: true,
        },
        {
            id: 6,
            name: "location",
            type: "text",
            placeholder: "Location",
            label: "Location",
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
        <div className='w-full flex'>
            <button
                onClick={toggleModal}
                className="
                     bg-navbg font-bowlby text-borderblue p-5 drop-shadow-md
                     mt-4 mx-auto text-2xl rounded-2xl">
                Create a New Event
            </button>

            {modal && (
                < div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
            flex justify-center items-center w-full'>
                    <div onClick={toggleModal} className="overlay">
                        <div className='modal-content bg-card border-borderblue border-2 rounded-lg p-4 drop-shadow-xl w-[300px] 
                    sm:w-[400px]
                    xl:w-[800px]'>
                            <div className='xl:py-8'>
                                <h1 className='text-center font-titan text-borderblue text-2xl
                                                xl:text-4xl'>
                                    Create a new event!</h1>
                                <form className='' onSubmit={handleSubmit}>

                                    {inputs.map((input) => (
                                        <CreateInput
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
                                            onClick={toggleModal}>CLOSE
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div >
    )
}

export default CreateModal