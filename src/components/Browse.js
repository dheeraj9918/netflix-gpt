import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovi';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import usePapularMovies from '../Hooks/usePapularMovies';
import GPTSearch from './GPTSearchPage';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  //this is own custom hooks 
  useNowPlayingMovies();
  usePapularMovies(); //

  return (
    <div>
      <Header />
      {showGptSearch ? (<GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>)}
    </div>
  )
}

export default Browse;