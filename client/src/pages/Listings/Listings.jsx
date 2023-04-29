import React from 'react';
import CreateModal from '../../components/CreateModal/CreateModal'
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries';
// import Auth from '../utils/auth';
import EventCard from '../../components/EventCard'
// import { allEvents } from '../../constants/constants'

function Listings() {
    const { loading, data } = useQuery(QUERY_POSTS);

    console.log('DATA: ', data)
    let postData = data?.getAllPosts || [];
    console.log(postData, "postData")
  

    if (loading) {
        return <h2>LOADING</h2>
    }

    return (

        <section className='h-[100%] w-full  flex flex-col justify-center'>
            {/* <p className='ml-4 w-[160px] text-manrope text-xs bg-blue-100 p-1 rounded text-navtext1'>logged in as {" "} </p> */}
            <div className='sm:m-4 flex flex-col items-center'>
                {postData.map((post) => (
                    <EventCard key={post.id} {...post} />
                    // <div>{post.username}</div>

                ))}
                {/* {loading ? (
            <h1> Loading posts</h1>
          ) : (
               <EventCard posts={posts}/>
             ) 
         }
     ;  */}
            </div>
            <div className=''>
                <CreateModal />
            </div>
        </section>
    );
}


export default Listings;







