import React from 'react';
import Movie from './Movie'; // Assuming you have a Movie component

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} /> // Assuming id is a unique identifier for movies
      ))}
    </div>
  );
};

export default MovieList;
