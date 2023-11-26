import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    if (!movies) return;

    return (
        <div className='px-8'>
            <h1 className='text-2xl font-bold py-4 pt-8 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll scroll'>
                <div className='flex'>
                    {
                        movies.map((movie) => <MovieCard key={movie.id} posterImage={movie.poster_path} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default MovieList;
