import React from 'react'

const EventCard = ({ title, description, username, location, time, createdAt }) => {
    return (
        <div className='w-full sm:w-[80%] max-w-[600px] flex flex-col border-4 border-borderblue font-manrope rounded-3xl my-4 p-4 drop-shadow-lg bg-card
                        xl:max-w-[1000px]'>
            <h1 className='text-lg font-bold text-borderblue 
                           lg:text-xl
                           xl:text-3xl'>{title}</h1>
            <div className='w-[90%] flex flex-col mx-auto'>
            <p className='text-[10px] text-navtext1
                          lg:text-sm
                          xl:text-lg'>Created by {username} on {createdAt}</p>
            <p className='w-full mx-auto py-2 text-sm text-slate-800
                          lg:text-lg lg:py-4
                          xl:text-2xl'>{description}</p>
            <p className='text-right text-[10px] text-navtext1
                          lg:text-sm
                          xl:text-lg'>{location}</p>
            <p className='text-right text-[10px] text-navtext1
                          lg:text-sm
                          xl:text-lg'>{time}</p>
        </div>
        </div>
    )
}

export default EventCard