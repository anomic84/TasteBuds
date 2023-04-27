import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import LoginModal from './LoginModal/LoginModal';
import SignUpModal from './SignUpInput/SignUpModal';
import { Link } from "react-router-dom";

import auth from '../utils/auth';

const Navbar = ({ currentPage, handlePageChange }) => {
    // toggles navbar mobile menu
    const [toggleNavMenu, setToggleNavMenu] = useState(false);

    // Login and SignUp Logic
    const [loginModal, setLoginModal] = useState(false);
    const [signUpModal, setSignUpModal] = useState(false);
    const toggleLoginModal = () => {
        setLoginModal(!loginModal)
    }
    const toggleSignUpModal = () => {
        setSignUpModal(!signUpModal)
    }



    return (
        <div className="w-full py-3 relative bg-navbg
                        lg:py-2 ">
            {/* // MONITORS */}
            <div className="hidden md:flex flex-row justify-between items-center px-4">
                <div className=''>
                    <p className='text-4xl py-5 font-anrope text-navtext1'>TasteBuds</p>
                </div>
                <ul className="flex items-center justify-end">
                    {auth.loggedIn() ? (
                        <>
                            <li className='text-2xl py-5 font-manrope text-navtext1 pr-4'>
                                <Link to="/admin">Profile</Link>
                            </li>
                            <li className='text-2xl py-5 font-manrope text-navtext1 pr-4'>
                                <Link to="/listings">Listings</Link>
                            </li>
                            <li className='text-2xl py-5 font-manrope text-navtext1 pr-4'>
                                <Link to="/" onClick={auth.logout}>Logout</Link>
                            </li>
                        </>
                    ) : (
                        <>
                           
                        </>
                    )}
                </ul>
            </div>
            {/* MOBILE */}

            <div className="md:hidden flex flex-row justify-between items-center px-4 w-full">
                {toggleNavMenu
                    ? ''
                    : <h1 className="text-navtext1 text-lg">TasteBuds</h1>
                }
                {toggleNavMenu
                    ? ''
                    : <FaBars className="text-navtext1" size={27} onClick={() => setToggleNavMenu((prev) => !prev)} />
                }
                {toggleNavMenu && (
                    <div className='flex flex-col w-full'>
                        <FaTimes className="text-navtext1  right-4" size={27} onClick={() => setToggleNavMenu((prev) => !prev)} />
                        <div className="z-10 h-screen flex justify-center items-center">
                            <div className="text-navtext  sm:text-xl text-center w-full flex flex-col justify-center">
                                {auth.loggedIn() ? (
                                    <>
                                        <Link className='text-2xl py-5 font-manrope text-navtext1'
                                            to="/admin"
                                            onClick={() => setToggleNavMenu((prev) => !prev)}>Profile
                                        </Link>
                                        <Link className='text-2xl py-5 font-manrope text-navtext1'
                                            to="/listings"
                                            onClick={() => setToggleNavMenu((prev) => !prev)}>Listings
                                        </Link>
                                        <Link className='text-2xl py-5 font-manrope text-navtext1'
                                            to="/"
                                            onClick={auth.logout}>Logout
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <div className='flex flex-col justify-center mx-auto my-auto items-center gap-2'>
                                            <div className='flex justify-center'>
                                                <button
                                                    onClick={toggleSignUpModal}
                                                    className='text-2xl py-5 font-manrope text-navtext1'>
                                                    Sign Up!
                                                </button>
                                            </div>
                                            <div className='flex justify-center'>
                                                <button
                                                    onClick={toggleLoginModal}
                                                    id='loginButton'
                                                    className='text-2xl py-5 font-manrope text-navtext1'>
                                                    Login
                                                </button>
                                            </div>
                                            <SignUpModal className='' signUpModal={signUpModal} setSignUpModal={setSignUpModal} toggleSignUpModal={toggleSignUpModal} />
                                            <LoginModal className='' loginModal={loginModal} setLoginModal={setLoginModal} toggleLoginModal={toggleLoginModal} />
                                        </div>

                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}


export default Navbar