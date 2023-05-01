import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_POST } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import EventCard from '../../components/EventCard';
import CreateModal from '../../components/CreateModal/CreateModal';
import { useQuery } from '@apollo/client';
import Auth from '../../utils/auth';
// import { TbCalendarPlus } from 'react-icons/tb';
import CreateInput from '../../components/CreateModal/CreateInput';

const Admin = ({ client }) => {
    const [modal, setModal] = useState(false);

    const [post] = useMutation(CREATE_POST);
    function toggleModal() {
        console.log('fired');
        setModal(!modal);
    }

    // --------------- EVENT VALUES AND INPUTS --------------- //
    const [values, setValues] = useState({
        username: '',
        title: '',
        description: '',
        time: '',
        location: '',
    });

    const [postTime, setCreateTime] = useState();
    const inputs = [
        {
            id: 2,
            name: 'title',
            type: 'text',
            placeholder: 'Title',
            label: 'Title',
            required: true,
        },
        {
            id: 3,
            name: 'description',
            type: 'text',
            placeholder: 'Description',
            label: 'Description',
            required: true,
        },
        {
            id: 4,
            name: 'time',
            type: 'datetime-local',
            placeholder: Date(),
            label: 'Time',
            required: true,
            value: Date(),
        },

        {
            id: 6,
            name: 'location',
            type: 'text',
            placeholder: 'Location',
            label: 'Location',
            required: true,
        },
    ];

    // --------------- CREATE EVENT METHODS --------------- //

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        // console.log(e.target.value)
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const handleCreatePost = async () => {
        try {
            const token = Auth.loggedIn() ? Auth.getToken() : null;
            const userData = Auth.getProfile();
            // console.log(userData)
            if (!token) {
                return false;
            }
            const { data } = await post({
                variables: {
                    title: values.title,
                    description: values.description,
                    location: values.location,
                    time: postTime,
                    username: userData.data.username,
                },
            });
        } catch (err) {
            console.error(err);
        }
    };

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
            <div
                className=' mx-auto my-4 p-10 rounded-full drop-shadow-lg max-w-[500px]  drop-shadow-lg
            md:w-[80%]
            xl:max-w-[1000px] '
            >
                {/* FIXME maybe add a background color circle to make the name pop? with some transparency maybe */}
                <h1
                    className=' text-center font-bowlby text-2xl text-pink
                xl:text-4xl xl:py-2'
                >
                    {data ? data.me.username : <br />}'s profile
                </h1>
            </div>
            <div className='z-10'>
                <CreateModal
                    source={'admin'}
                    client={client}
                    setModal={setModal}
                    modal={modal}
                />
            </div>
            <div className='mx-auto'>
                {data ? (
                    data.me.posts.map((post) => {
                        return (
                            <EventCard
                                title={post.title}
                                description={post.description}
                                username={post.username}
                                location={post.location}
                                time={post.time}
                                comments={post.comments}
                                postId={post._id}
                                source={'admin'}
                                client={client}
                                buddies={post.buddies}
                                buddylist={post.buddylist}
                            />
                        );
                    })
                ) : (
                    <br />
                )}
            </div>

            <div
                className='flex justify-end pr-4
          max-w-[600px]
          md:w-[80%] md:pr-0
          xl:max-w-[1000px]'
            >
                {/* FUTURE DEVELOPMENT */}
                {/* <TbCalendarPlus
                    className='text-6xl text-hotpink mr-left bg-darkblue rounded-lg p-1  drop-shadow-lg md:right-0'
                    onClick={() => {
                        handleCreatePost();
                        toggleModal();
                    }}
                /> */}
            </div>
            {modal && (
                <div
                    className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
            flex justify-center items-center w-full'
                >
                    <div className='overlay'>
                        <div
                            className='modal-content bg-orange border-hotred border-2 rounded-lg p-4 drop-shadow-xl w-[300px] 
                    sm:w-[400px]
                    xl:w-[800px]'
                        >
                            <div className='xl:py-8'>
                                <h1
                                    className='text-center p-5 font-titan bg-orange text-maroon text-2xl
                                                xl:text-4xl'
                                >
                                    Create a new event!
                                </h1>
                                <form className='' onSubmit={handleSubmit}>
                                    {inputs.map((input) => (
                                        <CreateInput
                                            key={input.id}
                                            {...input}
                                            value={values[input.value]}
                                            onChange={onChange}
                                            setCreateTime={setCreateTime}
                                        />
                                    ))}
                                    <div className='flex flex-row justify-center'>
                                        <button
                                            className='mt-4 mx-auto text-center rounded-lg  bg-orange text-navnametext font-bowlby text-hotpink  w-[40%] sm:w-[25%] max-w-[180px] p-2 drop-shadow-md
                                                           xl:text-2xl'
                                            onClick={() => {
                                                handleCreatePost();
                                                toggleModal();
                                            }}
                                        >
                                            Submit
                                        </button>
                                        <button
                                            className='close-modal mt-4 mx-auto text-center rounded-lg bg-hotpink text-navnametext font-bowlby text-hotpink  w-[40%] sm:w-[25%] max-w-[180px] p-2 drop-shadow-md
                                                       xl:text-2xl'
                                            onClick={toggleModal}
                                        >
                                            CLOSE
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
//{data.me.posts.map((posts)=>{<li>{posts.title}</li>})}
export default Admin;
