import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';


const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies);
  
  
  return (
    <div className='bg-black '>
      <div className='-mt-52  relative z-20'>
      <MovieList title={"Now Playing"} movies = {movies.nowPlayingMovies}  />
      <MovieList title={"Papular Movies"} movies = {movies.popularMovies}  />
      <MovieList title={"Tranding Movies"} movies = {movies.popularMovies}  />
      <MovieList title={"Horrer Movies"} movies = {movies.nowPlayingMovies}  />
      <MovieList title={"Upcoming Movies"} movies = {movies.nowPlayingMovies}  />
      <MovieList title={"Bollybood Movies"} movies = {movies.nowPlayingMovies}  />
      </div>
    </div>
  )
}

export default SecondaryContainer;