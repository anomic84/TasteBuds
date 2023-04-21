import React from 'react'
import { adminEvents } from '../../constants/constants'
import EventCard from '../../components/EventCard'

const Admin = () => {
    return (
        <section className='h-[100%] w-full  flex flex-col justify-center'>
            <div className='m-4 border-4 border-borderblue  rounded-3xl my-4 p-4 drop-shadow-lg bg-card'>
                <h1 className='text-center text-borderblue font-manrope font-bold text-4xl'>Cryptic Andy</h1>
            </div>
            <div className='m-4 flex flex-col items-center'>
                {adminEvents.map((adminEvent) => (
                    <EventCard key={adminEvent.id} {...adminEvent} />
                ))}
            </div>
        </section>
    )
}

export default Admin