import React from 'react'

const EventCard = ({ title, description, username, location, time, createdAt }) => {
    return (
        <div className='w-full sm:w-[80%] flex flex-col border-4 border-borderblue font-manrope rounded-3xl my-4 p-4 drop-shadow-lg bg-card'>
            <h1 className='text-lg font-bold text-borderblue '>{title}</h1>
            <p className='text-[10px]'>Created by {username} on {createdAt}</p>
            <p className='w-[90%] mx-auto py-2 text-sm'>{description}</p>
            <p className='text-right text-xs'>{location}</p>
            <p className='text-right text-xs'>{time}</p>
        </div>
    )
}

export default EventCard