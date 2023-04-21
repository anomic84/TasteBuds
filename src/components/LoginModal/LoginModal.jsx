import React, { useState } from 'react'
import "./loginmodal.css"
import LoginInput from './LoginInput'


const LoginModal = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    // --------------- LOGIN VALUES AND INPUTS --------------- //
    const [values, setValues] = useState({
        email: "",
        password: "",
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
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            required: true,
        }
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
        <div className=''>
            <button
                onClick={toggleModal}
                className="btn-modal text-2xl py-5 font-manrope text-navtext1">
                Login
            </button>

            {modal && (
                <div className=''>
                    < div className='bg-signupcard border border-footerblue rounded-lg p-4 drop-shadow-xl w-[100%]'>
                        <div className="overlay"></div>
                        <div className="modal-content">
                            <div className=''>
                                <form className='' onSubmit={handleSubmit}>
                    
                                    {inputs.map((input) => (
                                        <LoginInput
                                            key={input.id}
                                            {...input}
                                            value={values[input.name]}
                                            onChange={onChange}
                                        />
                                    ))}
                                    <div className='flex flex-row justify-center'>
                                        <button className='mt-4 mx-auto text-cetner rounded bg-navbg text-navnametext font-bowlby text-footerblue  w-[40%] sm:w-[25%] max-w-[180px] p-2 drop-shadow-md'>
                                            Submit</button>
                                        <button
                                            className='close-modal mt-4 mx-auto text-cetner rounded bg-navbg text-navnametext font-bowlby text-footerblue  w-[40%] sm:w-[25%] max-w-[180px] p-2 drop-shadow-md'
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

export default LoginModal