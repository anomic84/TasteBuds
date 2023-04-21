import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import LoginModal from './LoginModal/LoginModal';

const Navbar = ({ currentPage, handlePageChange }) => {
    // toggles navbar mobile menu
    const [toggleMenu, setToggleMenu] = useState(false);


 

    return (
        <div className="w-full py-3 lg:py-7 relative bg-navbg">
            {/* // MONITORS */}
            <div className="hidden sm:flex flex-row justify-center items-center">

                <div className=''>
                    <p className=''>TasteBuds</p>
                </div>
                <div className="flex flex-1 items-center justify-end">
                    <p className=''><a href='#home' onClick={() => handlePageChange('Home')}>Home</a></p>
                    <p className=''><a href='#admin' onClick={() => handlePageChange('Admin')}>Profile</a></p>
                    <p className=''><a href='#istings' onClick={() => handlePageChange('Listings')}>Listings</a></p>
                </div>
            </div>
            {/* MOBILE */}

            <div className="sm:hidden flex flex-row justify-between items-center px-4 w-full">
                {toggleMenu
                    ? ''
                    : <h1 className="text-navtext1 text-lg">TasteBuds</h1>
                }
                {toggleMenu
                    ? ''
                    : <FaBars className="text-navtext1" size={27} onClick={() => setToggleMenu((prev) => !prev)} />
                }
                {toggleMenu && (
                    <div className='flex flex-col w-full'>
                        <FaTimes className="text-navtext1  right-4" size={27} onClick={() => setToggleMenu((prev) => !prev)} />
                        <div className="z-10 h-screen  flex justify-center items-center">
                            <div className="text-navtext  sm:text-xl text-center w-full flex flex-col justify-center">
                                <p className='text-2xl py-5 font-manrope text-navtext1'>
                                    <a
                                        href='#home'
                                        onClick={() => { handlePageChange('Home'); setToggleMenu((prev) => !prev) }}>
                                        Home
                                    </a>
                                </p>
                                <p className='text-2xl py-5 font-manrope text-navtext1'>
                                    <a
                                        href='#admin'
                                        onClick={() => { handlePageChange('Admin'); setToggleMenu((prev) => !prev) }}>
                                        Profile
                                    </a>
                                </p>
                                <p className='text-2xl py-5 font-manrope text-navtext1'>
                                    <a
                                        href='#listings'
                                        onClick={() => { handlePageChange('Listings'); setToggleMenu((prev) => !prev) }}>
                                        Listings
                                    </a>
                                </p>
                                
                                <LoginModal />
                                {/* <p className='text-2xl py-3 mt-2 w-[120px] bg-footerblue rounded-2xl drop-shadow-md font-manrope text-signupcard'>
                                    <a
                                        href='#listings'
                                        onClick={() => { handlePageChange('Login'); setToggleMenu((prev) => !prev) }}>
                                        Login
                                    </a>
                                </p> */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}


export default Navbar