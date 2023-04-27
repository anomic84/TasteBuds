import React from 'react';
import CreateModal from '../../components/CreateModal/CreateModal'
// import { useQuery } from '@apollo/client';
// import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';
// import Auth from '../utils/auth';


// import { allEvents } from '../../constants/constants'
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux"
// import Loader from 'react-spinner-loader';
// import NavBar from '../../components/Navbar'

function Listings(props) {
    //   const [loading, data] = useQuery(QUERY_ME);
        //   const [getAllPosts] = useQuery(QUERY_POSTS);
  return (

    <section className='h-[100%] w-full  flex flex-col justify-center'>
       <p className='ml-4 w-[160px] text-manrope text-xs bg-blue-100 p-1 rounded text-navtext1'>logged in as {props.username}</p>
        <div className='sm:m-4 flex flex-col items-center'>
            {/* {allEvents.map((allEvent) => ( 
                 <EventCard key={allEvent.id} {...allEvent} /> 
            ))} */}
             {/* {loading ? (
            <h1> Loading posts</h1>
          ) : (
            data.getAllPosts && data.getAllPosts.map((posts) => {
                return (
<div>
    <EventCard post={posts}/>
</div> */}
                {/* ) */}
            {/* }) */}
        {/* )}; */}
        </div> 
        <div className='z-0'>
            <CreateModal />
        </div>
    </section>
);
}   


// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux"
// import Loader from 'react-spinner-loader';
// import NavBar from '../../components/Navbar'

// export const Listings = () => {



export default Listings;







