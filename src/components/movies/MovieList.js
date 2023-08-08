import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p>No movies available</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;

