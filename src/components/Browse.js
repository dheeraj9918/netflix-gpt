import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovi';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import usePapularMovies from '../Hooks/usePapularMovies';


const Browse = () => {
  //this is own custom hooks 
  useNowPlayingMovies();
  usePapularMovies(); //

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer/>
    </div>
  )
}

export default Browse;