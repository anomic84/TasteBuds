import React, { useEffect, useState } from 'react';
import EventCard from '../../components/EventCard'
// import CreateModal from '../../components/CreateModal/CreateModal'
import { allEvents } from '../../constants/constants'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import Loader from 'react-spinner-loader';
import NavBar from '../../components/Navbar'


// function Listings() {
//   return (
//     <section className='h-[100%] w-full  flex flex-col justify-center'>
//         <div className='m-4 border-4 border-borderblue mx-auto rounded-3xl my-4 p-4 drop-shadow-lg bg-card max-w-[600px]
//         md:w-[80%]
//         xl:max-w-[1000px]'>
//             <h1 className='text-center text-borderblue font-manrope font-bold text-4xl
//             xl:text-6xl xl:py-2'>Cryptic Andy</h1>
//         </div>
//         <div className='sm:m-4 flex flex-col items-center'>
//             {allEvents.map((allEvent) => (
//                 <EventCard key={allEvent.id} {...allEvent} />
//             ))}
//         </div>
//         <div className='z-0'>
//             <CreateModal />
//         </div>
//     </section>
// )
// }   


// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux"
// import Loader from 'react-spinner-loader';
// import NavBar from '../../components/Navbar'

export const Listings = () => {

    const {
        auth: { token },
        posts: { posts, isLoading },
    } = useSelector( state => state );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allEvents());
    }, [dispatch, token]);

    return (
        <div>
            <NavBar />

            <div className="flex justify-center px-5 sm:px-32 md:mt-4">
                <div className="flex h-screen w-screen">

                   

                    <main className="md:mx-4 w-full sm:basis-2/3">

                        <header className="m-4 hidden sm:flex">
                            <h1 className="text-xl">All Posts</h1>
                        </header>

                        <header className="text-xl font-bold flex py-4 text-blue-600 sm:hidden">
                            <Link to="/home" id="hero-logo"> TassteBuds </Link>
                        </header>

                        {isLoading ? (
                            <div className="z-20">
                                <Loader show={isLoading} />
                            </div>
                        ) : (
                            posts.map(post => <EventCard key={post._id} post={EventCard} />)
                        )}

                    </main>

                   
                </div>
            </div>
        </div>
    )
}

// export default Listings;







