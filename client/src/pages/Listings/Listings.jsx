import React from 'react';
import EventCard from '../../components/EventCard'
import CreateModal from '../../components/CreateModal/CreateModal'
import { allEvents } from '../../constants/constants'
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux"
// import Loader from 'react-spinner-loader';
// import NavBar from '../../components/Navbar'


function Listings() {
  return (
    <section className='h-[100%] w-full  flex flex-col justify-center'>
       <p className='ml-4 w-[160px] text-manrope text-xs bg-blue-100 p-1 rounded text-navtext1'>logged in as Cryptic Andy</p>
        <div className='sm:m-4 flex flex-col items-center'>
            {allEvents.map((allEvent) => (
                <EventCard key={allEvent.id} {...allEvent} />
            ))}
        </div>
        <div className='z-0'>
            <CreateModal />
        </div>
    </section>
)
}   


// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux"
// import Loader from 'react-spinner-loader';
// import NavBar from '../../components/Navbar'

// export const Listings = () => {



export default Listings;







