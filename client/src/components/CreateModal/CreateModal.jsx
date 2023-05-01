import React, { useState } from 'react';
import CreateInput from './CreateInput';
import { useMutation } from '@apollo/client';
import { CREATE_POST } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { QUERY_ME, QUERY_POSTS } from '../../utils/queries';

const CreateModal = ({ client, source }) => {
    const [modal, setModal] = useState(false);
    const [post] = useMutation(CREATE_POST);
    const toggleModal = () => {
        setModal(!modal);
    };

    // --------------- EVENT VALUES AND INPUTS --------------- //
    const [values, setValues] = useState({
        title: '',
        description: '',
        time: '',
        location: '',
        buddies: 0,
    });

    const [postTime, setCreateTime] = useState();
    const inputs = [
        {
            id: 2,
            name: 'title',
            type: 'text',
            placeholder: 'Title',
            label: 'Title',
            required: true,
        },
        {
            id: 3,
            name: 'description',
            type: 'text',
            placeholder: 'Description',
            label: 'Description',
            required: true,
        },
        {
            id: 4,
            name: 'time',
            type: 'datetime-local',
            placeholder: Date(),
            label: 'Time',
            required: true,
            value: Date(),
        },

        {
            id: 6,
            name: 'location',
            type: 'text',
            placeholder: 'Location',
            label: 'Location',
            required: true,
        },
        {
            id: 7,
            name: 'buddies',
            type: 'number',
            placeholder: '2',
            label: 'Reservation Size',
            required: true,
        },
    ];

    // --------------- CREATE EVENT METHODS --------------- //

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        // console.log(e.target.value)
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const handleCreatePost = async () => {
        try {
            const token = Auth.loggedIn() ? Auth.getToken() : null;
            const userData = Auth.getProfile();
            //console.log(userData);
            if (!token) {
                return false;
            }
            const { data } = await post({
                variables: {
                    title: values.title,
                    description: values.description,
                    location: values.location,
                    time: postTime,
                    username: userData.data.username,
                    buddies: parseInt(values.buddies),
                    buddylist: [userData.data.username],
                },
            });

            //console.log(data);
            if (source === 'admin') {
                await client.refetchQueries({ include: [QUERY_ME] });
                toggleModal();
            } else if (source === 'listing') {
                await client.refetchQueries({ include: [QUERY_POSTS] });
                toggleModal();
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='w-full flex'>
            <button
                onClick={toggleModal}
                className='
                     bg-orange  font-bowlby text-pink p-5 drop-shadow-md
                     mt-4 mx-auto text-2xl rounded-2xl'
            >
                Create a New Event
            </button>

            {modal && (
                <div
                    className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
            flex justify-center items-center w-full'
                >
                    <div className='overlay'>
                        <div
                            className='modal-content bg-apricot bg-opacity-75 border-darkest border-2 rounded-lg p-4 drop-shadow-xl w-[300px] 
                    sm:w-[400px]
                    xl:w-[800px]'
                        >
                            <div className='xl:py-8'>
                                <h1
                                    className='text-center font-titan text-darkest text-2xl
                                                xl:text-4xl'
                                >
                                    Create a new event!
                                </h1>
                                <form className='' onSubmit={handleSubmit}>
                                    {inputs.map((input) => (
                                        <CreateInput
                                            key={input.id}
                                            {...input}
                                            value={values[input.value]}
                                            onChange={onChange}
                                            setCreateTime={setCreateTime}
                                        />
                                    ))}
                                    <div className='flex flex-row justify-center'>
                                        <button
                                            className='mt-4 mx-auto text-center rounded bg-orange text-navnametext font-bowlby text-hotred  w-[40%] sm:w-[25%] max-w-[180px] p-2 drop-shadow-md
                                                           xl:text-2xl'
                                            onClick={() => handleCreatePost()}
                                        >
                                            Submit
                                        </button>
                                        <button
                                            className='close-modal mt-4 mx-auto text-center rounded bg-orange text-navnametext font-bowlby text-hotred  w-[40%] sm:w-[25%] max-w-[180px] p-2 drop-shadow-md
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
            )}
        </div>
    );
};

export default CreateModal;
