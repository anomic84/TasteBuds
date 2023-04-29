import React from 'react'
// import { adminEvents } from '../../constants/constants'
import EventCard from '../../components/EventCard'
// import { useParams } from 'react-router-dom';
import CreateModal from '../../components/CreateModal/CreateModal'
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';



const Admin = ({ client }) => {
    const { loading, data } = useQuery(QUERY_ME);
    if (data) {
        console.log('DATA: ', data.me);
    }
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
        return false;
    }
    return (
        <section className='w-full  flex flex-col justify-center'>

            <div className='m-4 border-4 border-borderblue mx-auto rounded-3xl my-4 p-4 drop-shadow-lg bg-card max-w-[600px]
            md:w-[80%]
            xl:max-w-[1000px]'>
                <h1 className='text-center text-borderblue font-manrope font-bold text-4xl
                xl:text-6xl xl:py-2'>{data ? data.me.username : "waffles"}</h1>
            </div>
            <div className='sm:m-4 flex flex-col items-center'>
                {/* {userData.map((post) => (
                    <EventCard key={post.id} {...post} />
                    
                ))} */}
            </div>
            <div className='mx-auto'>
                <h1>About me</h1>
                {/* is there a avatar generator in tailwind? */}
                <p>Email: {data ? data.me.email : "email"}</p>
                {/* {data?<SampleComponent posts={data.me.posts}/>:<br/>} */}
                {data ? data.me.posts.map((post) => { return (<EventCard title={post.title} description={post.description} username={post.username} location={post.location} time={post.time} comments={post.comments} postId={post._id} source={"admin"} client={client} />) }) : <br />}
            </div>
            <div className='z-0'>
                <CreateModal source={"admin"} client={client} />
            </div>
        </section>
    )
}
//{data.me.posts.map((posts)=>{<li>{posts.title}</li>})}
export default Admin