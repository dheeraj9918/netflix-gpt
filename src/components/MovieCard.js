import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterImage }) => {


  return (
    <div className='w-52 mr-4'>
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterImage}
      />
    </div>
  )
}

export default MovieCard