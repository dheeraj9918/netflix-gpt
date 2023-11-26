import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovi';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';


const Browse = () => {
  //this is own custom hooks 
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  )
}

export default Browse;