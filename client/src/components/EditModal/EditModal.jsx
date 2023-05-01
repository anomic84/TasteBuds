import React, { useState } from 'react';
import EditInput from './EditInput';
import { useMutation } from '@apollo/client';
import { UPDATE_POST } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { QUERY_ME, QUERY_POSTS } from '../../utils/queries';

const EditModal = ({
    client,
    source,
    title,
    description,
    time,
    location,
    postId,
}) => {
    const [modal, setModal] = useState(false);
    const [post] = useMutation(UPDATE_POST);
    const toggleModal = () => {
        setModal(!modal);
    };

    // --------------- EVENT VALUES AND INPUTS --------------- //
    function toDateTime(secs) {
        var t = new Date(parseInt(secs)); // Epoch
        //t.setSeconds(parseInt(secs) / 1000);
        //console.log(t.toISOString());
        return t.toISOString();
    }
    const [updateValues, setUpdateValues] = useState({
        title: title,
        description: description,
        location: location,
    });
    const [updateTime, setUpdateTime] = useState(toDateTime(time));
    const inputs = [
        {
            id: 2,
            name: 'title',
            type: 'text',
            placeholder: title,
            label: 'Title',
            required: true,
            value: title,
        },
        {
            id: 3,
            name: 'description',
            type: 'text',
            placeholder: description,
            label: 'Description',
            required: true,
            value: description,
        },
        {
            id: 4,
            name: 'time',
            type: 'datetime-local',
            placeholder: toDateTime(time),
            label: 'Time',
            required: true,
            value: toDateTime(time),
            defaultValue: toDateTime(time),
        },

        {
            id: 6,
            name: 'location',
            type: 'text',
            placeholder: location,
            label: 'Location',
            value: location,
        },
    ];

    // --------------- CREATE EVENT METHODS --------------- //

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        // console.log(e.target.value)
        setUpdateValues({ ...updateValues, [e.target.name]: e.target.value });
    };
    const handleUpdatePost = async () => {
        try {
            const token = Auth.loggedIn() ? Auth.getToken() : null;
            const userData = Auth.getProfile();
            //console.log(Date(updateValues.time));
            if (!token) {
                return false;
            }
            //console.log('updateValues:', updateValues);
            const { data } = await post({
                variables: {
                    postId: postId,
                    title: updateValues.title,
                    description: updateValues.description,
                    location: updateValues.location,
                    time: updateTime,
                    username: userData.data.username,
                },
            });

            // console.log(data);
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
        <div className='flex w-full '>
            {/* <div className='flex sm:hidden flex-row justify-between my-2'> */}
            <button
                onClick={toggleModal}
                style={{
                    backgroundColor: '#25364A',
                    color: '#F2AFA9',
                    borderRadius: '1rem',
                    fontFamily: 'bowlby',
                    padding: '1.25rem',
                    marginTop: '1rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    textSize: '1.5rem',
                }}
            >
                Edit Post
            </button>
            {/* </div> */}

            {modal && (
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
                                    Edit Post!
                                </h1>
                                <form className='' onSubmit={handleSubmit}>
                                    {inputs.map((input) => (
                                        <EditInput
                                            key={input.id}
                                            {...input}
                                            value={updateValues[input.value]}
                                            onChange={onChange}
                                            setUpdateTime={setUpdateTime}
                                            //updateValues={updateValues}
                                        />
                                    ))}
                                    <div className='flex flex-row justify-center'>
                                        <button
                                            className='mt-4 mx-auto text-center rounded-lg bg-navbg text-navnametext font-bowlby text-borderblue  w-[40%] sm:w-[25%] max-w-[180px] p-2 drop-shadow-md
                                                           xl:text-2xl'
                                            onClick={() => handleUpdatePost()}
                                        >
                                            Submit
                                        </button>
                                        <button
                                            className='close-modal mt-4 mx-auto text-center rounded-lg bg-navbg text-navnametext font-bowlby text-borderblue  w-[40%] sm:w-[25%] max-w-[180px] p-2 drop-shadow-md
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

export default EditModal;
