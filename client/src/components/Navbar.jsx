import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LoginModal from './LoginModal/LoginModal';
import SignUpModal from './SignUpInput/SignUpModal';
import { Link } from 'react-router-dom';
// import Logo from '../assets/pink-logo.png';
import Logo from '../assets/white-logo.png';
import auth from '../utils/auth';

const Navbar = ({ currentPage, handlePageChange }) => {
    // toggles navbar mobile menu
    const [toggleNavMenu, setToggleNavMenu] = useState(false);

    // Login and SignUp Logic
    const [loginModal, setLoginModal] = useState(false);
    const [signUpModal, setSignUpModal] = useState(false);
    const toggleLoginModal = () => {
        setLoginModal(!loginModal);
    };
    const toggleSignUpModal = () => {
        setSignUpModal(!signUpModal);
    };

    return (
        <div
            className='w-full py-3 relative bg-coral
                        lg:py-2 '
        >
            {/* // MONITORS */}
            <div className='hidden md:flex flex-row justify-between items-center px-4'>
                <img
                    src={Logo}
                    alt='logo'
                    className='w-1/6 hidden lg:block  my-auto md:object-scale-down md:flex flex-row justify-between items-center px-4'
                />
                <div className=''>
                    {/* ----------LOGO------- */}
                    <p className=' lg:hidden md:hidden sm:block text-4xl py-5 font-anrope text-white '>
                        TasteBuds
                    </p>
                </div>
                <ul className='flex items-center justify-end my-auto font-bowlby pr-4'>
                    {auth.loggedIn() ? (
                        <>
                            <li
                                className='text-2xl py-5  text-white pr-4
                            hover:text-orange duration-150'
                            >
                                <Link to='/admin'>Profile</Link>
                            </li>
                            <li
                                className='text-2xl py-5 text-white pr-4
                            hover:text-orange duration-150'
                            >
                                <Link to='/listings'>Listings</Link>
                            </li>
                            <li
                                className='text-2xl py-5  text-white pr-4
                            hover:text-orange duration-150'
                            >
                                <Link to='/' onClick={auth.logout}>
                                    Logout
                                </Link>
                            </li>
                        </>
                    ) : (
                        <></>
                    )}
                </ul>
            </div>
            {/* MOBILE */}

            <div className='md:hidden flex flex-row justify-between items-center px-4 w-full'>
                {toggleNavMenu ? (
                    ''
                ) : (
                    <h1 className='text-white text-lg'>TasteBuds</h1>
                )}
                {toggleNavMenu ? (
                    ''
                ) : (
                    <FaBars
                        className='text-white'
                        size={27}
                        onClick={() => setToggleNavMenu((prev) => !prev)}
                    />
                )}
                {toggleNavMenu && (
                    <div className='flex flex-col w-full'>
                        <FaTimes
                            className='text-white  right-4'
                            size={27}
                            onClick={() => setToggleNavMenu((prev) => !prev)}
                        />
                        <div className='z-10 h-screen flex justify-center items-center'>
                            <div className='text-orange  sm:text-xl text-center w-full flex flex-col justify-center'>
                                {auth.loggedIn() ? (
                                    <>
                                        <Link
                                            className='text-2xl py-5 font-manrope text-white
                                        hover:text-apricot duration-150'
                                            to='/admin'
                                            onClick={() =>
                                                setToggleNavMenu(
                                                    (prev) => !prev
                                                )
                                            }
                                        >
                                            Profile
                                        </Link>
                                        <Link
                                            className='text-2xl py-5 font-manrope text-white
                                        hover:text-orange duration-150'
                                            to='/listings'
                                            onClick={() =>
                                                setToggleNavMenu(
                                                    (prev) => !prev
                                                )
                                            }
                                        >
                                            Listings
                                        </Link>
                                        <Link
                                            className='text-2xl py-5 font-manrope text-white
                                        hover:text-apricot duration-150'
                                            to='/'
                                            onClick={auth.logout}
                                        >
                                            Logout
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <div className='flex flex-col justify-center mx-auto my-auto items-center gap-2'>
                                            <div className='flex justify-center'>
                                                <button
                                                    onClick={toggleSignUpModal}
                                                    className='text-2xl py-5 font-manrope text-white
                                                    hover:text-apricot duration-150'
                                                >
                                                    Sign Up!
                                                </button>
                                            </div>
                                            <div className='flex justify-center'>
                                                <button
                                                    onClick={toggleLoginModal}
                                                    id='loginButton'
                                                    className='text-2xl py-5 font-manrope text-white
                                                    hover:text-apricot duration-150'
                                                >
                                                    Login
                                                </button>
                                            </div>
                                            <SignUpModal
                                                className=''
                                                signUpModal={signUpModal}
                                                setSignUpModal={setSignUpModal}
                                                toggleSignUpModal={
                                                    toggleSignUpModal
                                                }
                                            />
                                            <LoginModal
                                                className=''
                                                loginModal={loginModal}
                                                setLoginModal={setLoginModal}
                                                toggleLoginModal={
                                                    toggleLoginModal
                                                }
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
