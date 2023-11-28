import React from 'react'
import GptSearchBar from './GptSearchBar';
import { BACKGROUN_IMAGE } from '../utils/constants';

const GPTSearch = () => {
  return (
    <div >
      <div className=' absolute -z-20 bg-black '>
        <img
          className='opacity-70'
          src={BACKGROUN_IMAGE} alt='backgroundImage'
        />
      </div>
      <GptSearchBar />
    </div>
  )
}

export default GPTSearch;