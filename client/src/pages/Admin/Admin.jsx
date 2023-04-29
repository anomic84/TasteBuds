import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { CREATE_POST } from '../../utils/mutations';
import { QUERY_ME, QUERY_POSTS } from '../../utils/queries';
// import { adminEvents } from '../../constants/constants'
import EventCard from '../../components/EventCard'
// import { useParams } from 'react-router-dom';
import CreateModal from '../../components/CreateModal/CreateModal'
import { useQuery } from '@apollo/client';
import Auth from '../../utils/auth';
import { TbCalendarPlus } from 'react-icons/tb'
import CreateInput
    from '../../components/CreateModal/CreateInput';
const Admin = ({ client }) => {

    const [modal, setModal] = useState(false);
    const [post] = useMutation(CREATE_POST);
    const toggleModal = () => {
        setModal(!modal)
    }

    // --------------- EVENT VALUES AND INPUTS --------------- //
    const [values, setValues] = useState({
        username: '',
        title: '',
        description: '',
        time: '',
        // createdAt: '',
        location: '',
    });

    const inputs = [

        {
            id: 2,
            name: "title",
            type: "text",
            placeholder: "Title",
            label: "Title",
            required: true,
        },
        {
            id: 3,
            name: "description",
            type: "text",
            placeholder: "Description",
            label: "Description",
            required: true,
        },
        {
            id: 4,
            name: "time",
            type: "text",
            placeholder: "Time",
            label: "Time",
            required: true,
        },
        // {
        //     id: 5,
        //     name: "createdAt",
        //     type: "text",
        //     placeholder: "Created At",
        //     label: "Created At",
        //     required: true,
        // },
        {
            id: 6,
            name: "location",
            type: "text",
            placeholder: "Location",
            label: "Location",
            required: true,
        },
    ]

    // --------------- CREATE EVENT METHODS --------------- //

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        // console.log(e.target.value)
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const handleCreatePost = async () => {

        try {
            const token = Auth.loggedIn() ? Auth.getToken() : null;
            const userData = Auth.getProfile();
            console.log(userData)
            if (!token) {
                return false;
            }
            const { data } = await post({
                variables: {
                    title: values.title,
                    description: values.description,
                    location: values.location,
                    time: Date(),
                    username: userData.data.username
                }
            });

            // console.log(data)
            // if (source === "admin") {
            //     await client.refetchQueries({ include: [QUERY_ME] })
            //     toggleModal()
            // } else if (source === "listing") {
            //     console.log('made it')
            //     await client.refetchQueries({ include: [QUERY_POSTS] })
            //     toggleModal()
            // }

        } catch (err) {
            console.error(err);
        }
    }

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
            <div className='z-10'>
                <CreateModal source={"admin"} client={client} />
            </div>
            <div className='sm:m-4 flex flex-col items-center'>
                {/* {userData.map((post) => (
                    <EventCard key={post.id} {...post} />
                    
                ))} */}
            </div>
            <div className='mx-auto'>
                {/* <h1>About me</h1> */}
                {/* is there a avatar generator in tailwind? */}
                {/* <p>Email: {data ? data.me.email : "email"}</p> */}
                {/* {data?<SampleComponent posts={data.me.posts}/>:<br/>} */}
                {data ? data.me.posts.map((post) => { return (<EventCard title={post.title} description={post.description} username={post.username} location={post.location} time={post.time} comments={post.comments} postId={post._id} source={"admin"} client={client} />) }) : <br />}
            </div>

            <div className='flex justify-end pr-4
          max-w-[600px]
          md:w-[80%] md:pr-0
          xl:max-w-[1000px]'>
                <TbCalendarPlus onClick={toggleModal}
                    className='text-6xl text-borderblue bg-navbg rounded-lg p-1  drop-shadow-lg md:right-0' />
            </div>
            {modal && (
                < div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
            flex justify-center items-center w-full'>
                    <div className="overlay">
                        <div className='modal-content bg-card border-borderblue border-2 rounded-lg p-4 drop-shadow-xl w-[300px] 
                    sm:w-[400px]
                    xl:w-[800px]'>
                            <div className='xl:py-8'>
                                <h1 className='text-center font-titan text-borderblue text-2xl
                                                xl:text-4xl'>
                                    Create a new event!</h1>
                                <form className='' onSubmit={handleSubmit}>

                                    {inputs.map((input) => (
                                        <CreateInput
                                            key={input.id}
                                            {...input}
                                            value={values[input.name]}
                                            onChange={onChange}
                                        />
                                    ))}
                                    <div className='flex flex-row justify-center'>
                                        <button className='mt-4 mx-auto text-center rounded bg-navbg text-navnametext font-bowlby text-borderblue  w-[40%] sm:w-[25%] max-w-[180px] p-2 drop-shadow-md
                                                           xl:text-2xl' onClick={() => handleCreatePost()}>
                                            Submit</button>
                                        <button
                                            className='close-modal mt-4 mx-auto text-center rounded bg-navbg text-navnametext font-bowlby text-borderblue  w-[40%] sm:w-[25%] max-w-[180px] p-2 drop-shadow-md
                                                       xl:text-2xl'
                                            onClick={toggleModal}>CLOSE
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* This is the "added event" icon button at the very bottom */}
        </section>
    )
}
//{data.me.posts.map((posts)=>{<li>{posts.title}</li>})}
export default Admin