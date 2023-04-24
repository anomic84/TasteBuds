import React from 'react'
import LoginModal from '../../components/LoginModal/LoginModal';
import SignUpModal from '../../components/SignUpInput/SignUpModal';
// import Restaurant from '../../assets/kayleigh-harrington-yhn4okt6ci0-unsplash.jpg'
// import SignUpInput from '../../components/SignUpInput/SignUpInput';

const Home = () => {


  return (


    <div className=' flex flex-col mx-auto'>
      {/* Greetings Section <--to--> Not a Member? */}
      <div className='flex flex-col'>
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
      <div className='flex flex-row justify-center items-center gap-2'>
        <div className='hidden md:flex justify-center'>
          <SignUpModal className='' />
        </div>
        <div className='hidden md:flex justify-center'>
          <LoginModal className='' />
        </div>
      </div>
    </div>
  )
}

export default Home

{/* <div className=''>
      
        <div className='bg-card border border-borderblue rounded-lg p-4 drop-shadow-xl max-w-[450px] mx-auto
        xl:max-w-[800px]'>
          <form className='' onSubmit={handleSubmit}>
            <h1 className='text-center text-navtext1 pb-2
                          xl:text-2xl'>Sign Up!</h1>
            {inputs.map((input) => (
              <SignUpInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <div className='flex flex-col justify-center'>
              <button className='mt-4 mx-auto text-center rounded bg-navbg font-bowlby text-borderblue  w-[180px] max-w-[180px] p-2 drop-shadow-md
                                 xl:text-2xl'>Submit</button>
            </div>
          </form>
        </div>
      </div> */}