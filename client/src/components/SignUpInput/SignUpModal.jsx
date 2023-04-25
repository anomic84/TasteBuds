import React, { useState } from 'react'
import SignUpInput from './SignUpInput'

const SignUpModal = ({ signUpModal, toggleSignUpModal }) => {


 

  // --------------- SIGN UP VALUES AND INPUTS --------------- //
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords need to match!",
      label: "Confirm Password",
      pattern: values.password,
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


      {signUpModal && (
        < div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
                flex justify-center items-center w-full'>
          <div className="overlay">
            {/* onClick={toggleSignUpModal} */}
            <div className='modal-content bg-card border border-borderblue rounded-lg p-4 drop-shadow-xl w-[300px] 
                        sm:w-[400px]
                        xl:w-[800px]'>
              <div className='xl:py-8'>
                <h1 className='text-center font-titan text-borderblue text-2xl
                                               xl:text-4xl'>Sign Up!</h1>
                <form className='' onSubmit={handleSubmit}>

                  {inputs.map((input) => (
                    <SignUpInput
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
                      onClick={toggleSignUpModal}>CLOSE
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

export default SignUpModal