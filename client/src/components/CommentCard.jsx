import React from 'react'

const CommentCard = ({ username, commentText }) => {

    return (
       <div className="flex flex-col w-full m-4 bg-navbg drop-shadow-lg rounded p-4 font-manrope ">
        <p className='text-left text-borderblue w-full py-2 text-base 
                          lg:text-lg lg:py-1
                          xl:text-xl'>"{commentText}"</p>
                          {/* TODO: Make username a link to users profile */}
        <p className='text-left pl-3 text-xs text-navtext1
                          lg:text-sm
                          xl:text-base'>- {username}</p>
       </div> 
    )
}

export default CommentCard