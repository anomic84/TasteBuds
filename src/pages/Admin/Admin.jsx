import React from 'react'
import { adminEvents } from '../../constants/constants'
import EventCard from '../../components/EventCard'
import CreateModal from '../../components/CreateModal/CreateModal'

const Admin = () => {
    return (
        <section className='h-[100%] w-full  flex flex-col justify-center'>
            <div className='m-4 border-4 border-borderblue mx-auto rounded-3xl my-4 p-4 drop-shadow-lg bg-card max-w-[600px]
            md:w-[80%]
            xl:max-w-[1000px]'>
                <h1 className='text-center text-borderblue font-manrope font-bold text-4xl
                xl:text-6xl xl:py-2'>Cryptic Andy</h1>
            </div>
            <div className='m-4 flex flex-col items-center'>
                {adminEvents.map((adminEvent) => (
                    <EventCard key={adminEvent.id} {...adminEvent} />
                ))}
            </div>
            <div className=''>
                <CreateModal />
            </div>
        </section>
    )
}

export default Admin