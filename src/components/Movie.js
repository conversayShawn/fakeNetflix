import React from 'react';

const Movie = ({ movie }) => {
  return (
    <div className="cartoon">
      <img src={movie.poster} alt={movie.name} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
    </div>
  );
};

export default Movie;
