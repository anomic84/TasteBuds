import React from 'react';
import CreateModal from '../../components/CreateModal/CreateModal';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../../utils/queries';
import Auth from '../../utils/auth';
import EventCard from '../../components/EventCard';
// import { allEvents } from '../../constants/constants'

function Listings({ client }) {
    const { loading, data } = useQuery(QUERY_POSTS);
    let postData = data?.getAllPosts || [];
    const userData = Auth.getProfile();
    console.log(postData, 'postData');
    //  console.log(userData.data.username, "userData")
    if (loading) {
        return <h2>LOADING</h2>;
    }
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
        return false;
    }

    return (
        <section className=' w-full  flex flex-col justify-center'>
            <h1
                // TODO: add max width
                className='text-left text-darkest font-manrope  text-lg
                xl:text-6xl xl:py-2 m-4'
            >
                Welcome {data ? userData.data.username : 'Foodie'}!
            </h1>
            <div className='z-10'>
                <CreateModal source={'listing'} client={client} />
            </div>
            {/* <div>Welcome {userData.data.username} ,</div> */}
            {/* <p className='ml-4 w-[160px] text-manrope text-xs bg-blue-100 p-1 rounded text-navtext1'>logged in as {" "} </p> */}
            <div className='sm:m-4 flex flex-col items-center'>
                {data ? (
                    data.getAllPosts.map((post) => (
                        <EventCard
                            postId={post._id}
                            client={client}
                            source='listing'
                            buddies={post.buddies}
                            buddylist={post.buddylist}
                            {...post}
                        />
                        // <div>{post.username}</div>
                    ))
                ) : (
                    <br />
                )}

                {/* {loading ? (
                    <h1> Loading posts</h1>
                    ) : (
                        <EventCard posts={posts}/>
                        ) 
                    }
                ;  */}
            </div>
        </section>
    );
}

export default Listings;
