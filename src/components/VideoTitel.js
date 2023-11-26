import React from 'react'

const VideoTitel = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-24  absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-5xl font-bold mb-4'>{title}</h1>
      <p className='text-lg my-4 w-1/2'> {overview}</p>
      <div className='mt-10'>
        <button className='bg-white px-10 py-2 rounded-md text-lg text-black hover:bg-opacity-80'>▶️ Play</button>
        <button className='mx-4 bg-gray-500 px-5 py-2 rounded-md text-lg text-white  bg-opacity-50 hover:bg-opacity-80'> ℹ️ More info</button>
      </div>
    </div>
  )
}

export default VideoTitel;