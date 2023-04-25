import React, { useState } from 'react'
import LoginInput from './LoginInput'


const LoginModal = ({ loginModal, toggleLoginModal }) => {


  

    // const loginBtn = document.getElementById('loginButton')
    // console.log(loginBtn)
    // loginBtn.addEventListener('click', (e) => {
    //     e.preventDefault()
    //     toggleLoginModal()
    // })

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


            {loginModal && (
                < div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
                flex justify-center items-center w-full'>
                    <div  className="overlay">
                        {/* onClick={toggleLoginModal} */}
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
                                            onClick={toggleLoginModal}>CLOSE
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