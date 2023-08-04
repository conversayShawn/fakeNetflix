import React, { useEffect, useState } from 'react';

const Movie = ({ movieId }) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/data/movies.json`)
      .then((response) => response.json())
      .then((data) => {
        const selectedMovie = data.find((movie) => movie.id === movieId);
        setMovie(selectedMovie);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
        setLoading(false);
      });
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="movie">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
    </div>
  );
};

export default Movie;
