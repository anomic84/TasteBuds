import React, { useState } from 'react'
// import "./loginmodal.css"
// import "./modalcss.css"
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
        <div className='w-full flex'>
            <button
                onClick={toggleModal}
                className='text-2xl py-5 font-manrope text-navtext1
                         md:bg-navbg md:font-bowlby md:text-borderblue  md:w-[180px]  md:p-2 md:drop-shadow-md
                         md:mt-4 md:mx-auto md:text-base
                         xl:text-2xl'>
                Login
            </button>

            {modal && (
                < div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
                flex justify-center items-center w-full'>
                    <div onClick={toggleModal} className="overlay">
                        <div className='modal-content bg-card border border-borderblue rounded-lg p-4 drop-shadow-xl w-[300px] 
                        sm:w-[400px]
                        xl:w-[800px]'>
                            <div className='xl:py-8'>
                                <h1 className='text-center font-titan text-borderblue text-2xl
                                               xl:text-4xl'>Login</h1>
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
                // </div>
            )}
        </div >
    )
}

export default LoginModal