import React, { useState } from 'react'
import LoginModal from '../../components/LoginModal/LoginModal';
import SignUpModal from '../../components/SignUpInput/SignUpModal';
// import Restaurant from '../../assets/kayleigh-harrington-yhn4okt6ci0-unsplash.jpg'
// import SignUpInput from '../../components/SignUpInput/SignUpInput';

const Home = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const toggleLoginModal = () => {
    setLoginModal(!loginModal)
  }
  const toggleSignUpModal = () => {
    setSignUpModal(!signUpModal)
  }
  return (


    <div className=' flex flex-col mx-auto'>
      {/* Greetings Section <--to--> Not a Member? */}
      <div className='flex flex-col px-4'>
        <h1 className=' py-5 text-5xl font-bowlby text-borderblue  drop-shadow-lg
        md:text-center
        xl:text-8xl'>
          WELCOME <br className='md:hidden' />
          TO <br />
          TASTEBUDS!
        </h1>
        <p className='text-right  font-manrope text-lg  right-4 w-full self-end drop-shadow-md
        sm:text-xl
        md:text-center
        xl:text-3xl'>
          "Where foodies become besties"
        </p>
        {/* Login */}

        <p className='text-center font-bowlby text-borderblue drop-shadow-md text-2xl pt-12
        xl:text-4xl'>
          Not a member?
        </p>
      </div>
      {/* SignUp and Login */}
      <div className='flex flex-row justify-center mx-auto items-center gap-2'>
        <div className='hidden md:flex justify-center'>
          <button
            onClick={toggleSignUpModal}
            className='text-2xl py-5 font-manrope text-navtext1
                         md:bg-navbg md:font-bowlby md:text-borderblue  md:w-[180px]  md:p-2 md:drop-shadow-md
                         md:mt-4 md:mx-auto md:text-base
                         xl:text-2xl'>
            Sign Up!
          </button>
        </div>
        <div className='hidden md:flex justify-center'>
          <button
            onClick={toggleLoginModal}
            id='loginButton'
            className='text-2xl py-5 font-manrope text-navtext1
                         md:bg-navbg md:font-bowlby md:text-borderblue  md:w-[180px]  md:p-2 md:drop-shadow-md
                         md:mt-4 md:mx-auto md:text-base
                         xl:text-2xl'>
            Login
          </button>
        </div>
        <SignUpModal className='' signUpModal={signUpModal} setSignUpModal={setSignUpModal} toggleSignUpModal={toggleSignUpModal} />
        <LoginModal className='' loginModal={loginModal} setLoginModal={setLoginModal} toggleLoginModal={toggleLoginModal} />
      </div>
    </div>
  )
}

export default Home

