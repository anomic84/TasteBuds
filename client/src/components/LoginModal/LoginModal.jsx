import React, { useState } from 'react';
import LoginInput from './LoginInput';

import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

const LoginModal = ({ loginModal, toggleLoginModal }) => {
    // --------------- LOGIN VALUES AND INPUTS --------------- //
    const [userFormData, setUserFormData] = useState({
        username: '',
        password: '',
    });

    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'Username',
            label: 'Username',
            required: true,
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            label: 'Password',
            required: true,
        },
    ];

    const [login] = useMutation(LOGIN_USER);

    // --------------- SIGN UP METHODS --------------- //
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setUserFormData(event.target.username.value);

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            console.log('userFormData: ', userFormData);
            const { data } = await login({
                variables: { ...userFormData },
            });

            console.log(data);

            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
        }

        setUserFormData({
            username: '',
            // email: '',
            password: '',
        });
    };

    return (
        <div className='w-full flex'>
            {loginModal && (
                <div
                    className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
                flex justify-center items-center w-full'
                >
                    <div className='overlay'>
                        {/* onClick={toggleLoginModal} */}
                        <div
                            className='modal-content bg-lightblue border border-darkest rounded-lg p-4 drop-shadow-xl w-[300px] 
                        sm:w-[400px]
                        xl:w-[800px]'
                        >
                            <div className='xl:py-8'>
                                <h1
                                    className='text-center font-titan text-darkest text-2xl
                                               xl:text-4xl'
                                >
                                    Login
                                </h1>

                                <form className='' onSubmit={handleFormSubmit}>
                                    {inputs.map((input) => (
                                        <LoginInput
                                            key={input.id}
                                            {...input}
                                            value={userFormData[input.name]}
                                            onChange={handleInputChange}
                                        />
                                    ))}
                                    <div className='flex flex-row justify-center'>
                                        <button
                                            className='mt-4 mx-auto text-center rounded bg-navbg text-navnametext font-bowlby text-hotpink  w-[40%] sm:w-[25%] max-w-[180px] p-2 drop-shadow-md
                                                          xl:text-2xl'
                                            type='submit'
                                            variant='success'
                                        >
                                            Submit
                                        </button>
                                        <button
                                            className='close-modal mt-4 mx-auto text-center rounded bg-navbg text-navnametext font-bowlby text-hotpink  w-[40%] sm:w-[25%] max-w-[180px] p-2 drop-shadow-md
                                                       xl:text-2xl'
                                            onClick={toggleLoginModal}
                                        >
                                            CLOSE
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                // </div>
            )}
        </div>
    );
};

export default LoginModal;
