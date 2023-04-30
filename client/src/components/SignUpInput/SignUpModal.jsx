import React, { useState } from 'react';
import SignUpInput from './SignUpInput';
import { useMutation } from '@apollo/client';
import { NEW_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const SignUpModal = ({ signUpModal, toggleSignUpModal }) => {
    // --------------- SIGN UP VALUES AND INPUTS --------------- //
    const [userFormData, setUserFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    // set state for form validation
    // const [validated] = useState(false);
    // set state for alert
    // define mutation for adding a user
    const [newUser, { error }] = useMutation(NEW_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log('HANDLE FORM SUBMIT TRIGGERED');
        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await newUser({
                variables: { ...userFormData },
            });

            Auth.login(data.newUser.token);
            console.log(data.newUser.token);
        } catch (err) {
            console.error(err);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    };
    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'Username',
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character!",
            label: 'Username',
            pattern: '^[A-Za-z0-9]{3,16}$',
            required: true,
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            errorMessage: 'It should be a valid email address!',
            label: 'Email',
            required: true,
        },
        {
            id: 3,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            errorMessage:
                'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
            label: 'Password',
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        // {
        //   id: 4,
        //   name: "confirmPassword",
        //   type: "password",
        //   placeholder: "Confirm Password",
        //   errorMessage: "Passwords need to match!",
        //   label: "Confirm Password",
        //   pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        //   required: true,
        // }
    ];

    // --------------- SIGN UP METHODS --------------- //

    return (
        <div className='w-full flex'>
            {signUpModal && (
                <div
                    className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
                flex justify-center items-center w-full'
                >
                    <div className='overlay'>
                        {/* onClick={toggleSignUpModal} */}
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
                                    Sign Up!
                                </h1>
                                <form className='' onSubmit={handleFormSubmit}>
                                    {inputs.map((input) => (
                                        <SignUpInput
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
                                            onClick={toggleSignUpModal}
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

export default SignUpModal;
