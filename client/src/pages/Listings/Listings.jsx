import React from 'react';
import CreateModal from '../../components/CreateModal/CreateModal'
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries';
import Auth from '../../utils/auth';
import EventCard from '../../components/EventCard'
// import { allEvents } from '../../constants/constants'

function Listings({client}) {
    const { loading, data } = useQuery(QUERY_POSTS);

    console.log('DATA: ', data)
    let postData = data?.getAllPosts || [];
    console.log(postData, "postData")
  

    if (loading) {
        return <h2>LOADING</h2>
    }
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
        return false;
    }
    return (

        <section className=' w-full  flex flex-col justify-center'>
<h1 className='p-1 text-4xl font-bold text-borderblue text-center'>Listing of ALL posts</h1>
            {/* <p className='ml-4 w-[160px] text-manrope text-xs bg-blue-100 p-1 rounded text-navtext1'>logged in as {" "} </p> */}
            <div className='sm:m-4 flex flex-col items-center'>
                {data?data.getAllPosts.map((post) => (
                    <EventCard postId={post._id} client={client} source="listing" {...post} />
                    // <div>{post.username}</div>

                )):<br/>}
                
                {/* {loading ? (
            <h1> Loading posts</h1>
          ) : (
               <EventCard posts={posts}/>
             ) 
         }
     ;  */}
            </div>
            <div className=''>
                <CreateModal source={"listing"} client={client} />
            </div>
        </section>
    );
}


export default Listings;







