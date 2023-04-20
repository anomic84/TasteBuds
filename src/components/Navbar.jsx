import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ currentPage, handlePageChange }) => {
    // toggles navbar mobile menu
    const [toggleMenu, setToggleMenu] = useState(false);


    return (
        <div className="w-full py-3 lg:py-7 ">
            {/* // MONITORS */}
            <div className="hidden sm:flex flex-row justify-center items-center">

                <div className=''>
                    <p className=''>TasteBuds</p>
                </div>
                <div className="flex flex-1 items-center justify-end">
                    <p className=''><a href='#home' onClick={() => handlePageChange('Home')}>Home</a></p>
                    <p className=''><a href='#admin' onClick={() => handlePageChange('Admin')}>Profile</a></p>
                    <p className=''><a href='#listings' onClick={() => handlePageChange('Listings')}>Listings</a></p>
                </div>
            </div>
            {/* MOBILE */}

            <div className="sm:hidden flex justify-between items-center px-4 w-full">
                {toggleMenu
                    ? ''
                    : <h1 className="text-navnametext text-lg  text-center">TasteBuds</h1>
                }
                <div className="flex ">
                    {toggleMenu
                        ? <FaTimes className="text-navnametext" size={27} onClick={() => setToggleMenu((prev) => !prev)} />
                        : <FaBars className="text-navnametext" size={27} onClick={() => setToggleMenu((prev) => !prev)} />
                    }
                    {toggleMenu && (
                        <div className="z-10 h-screen w-[100%] flex justify-center items-center">
                            <div className="text-navtext  sm:text-xl text-center flex flex-col justify-center">
                                <p className=''><a href='#home' onClick={() => handlePageChange('Home')}>Home</a></p>
                                <p className=''><a href='#admin' onClick={() => handlePageChange('Admin')}>Profile</a></p>
                                <p className=''><a href='#listings' onClick={() => handlePageChange('Listings')}>Listings</a></p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}


export default Navbar