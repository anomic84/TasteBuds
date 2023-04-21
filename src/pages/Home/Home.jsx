import React, { useState } from 'react'
import SignUpInput from '../../components/SignUpInput/SignUpInput';

const Home = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    console.log(e.target.value)
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div className='h-[100%] w-full px-4  flex flex-col'>
      {/* Greetings Section <--to--> Not a Member? */}
      <div className='flex flex-col flex-1'>
        <h1 className=' py-5 text-5xl font-bowlby text-footerblue  drop-shadow-lg'>
          WELCOME <br />
          TO <br />
          TASTEBUDS!
        </h1>
        <p className='text-right font-manrope text-[17px] right-4 w-[70%] self-end drop-shadow-md'>
          Where you can find and dine with peace of mind
        </p>
        <p className='text-center font-bowlby text-footerblue drop-shadow-md text-2xl py-8'>
          Not a member?
        </p>
      </div>
      {/* SignUp and Login */}
      <div className='flex-1'>
        {/* Sign Up */}
        <div className='bg-signupcard border border-footerblue rounded-lg p-4 drop-shadow-xl'>
          <form className='' onSubmit={handleSubmit}>
            <h1 className='text-center text-navtext1 pb-2'>Sign Up!</h1>
            {inputs.map((input) => (
              <SignUpInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <div className='flex flex-col justify-center'>
              <button className='mt-4 mx-auto text-cetner rounded bg-navbg text-navnametext font-bowlby text-footerblue  w-[40%] sm:w-[25%] max-w-[180px] p-2 drop-shadow-md'>Submit</button>
            </div>
          </form>
        </div>
        {/* Login */}
        <div>

        </div>

      </div>
    </div>

  )
}

export default Home