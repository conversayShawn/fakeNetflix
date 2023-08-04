import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/main-page/Home';
import CartoonList from './components/cartoons/CartoonList';
import MovieList from './components/movies/MovieList';
import Navigation from './components/main-page/Navigation';

const App = () => {
  const [cartoons, setCartoons] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch cartoons data
    axios.get('/data/cartoons.json').then((response) => {
      setCartoons(response.data);
    });

    // Fetch movies data
    axios.get('/data/movies.json').then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <h1>Childhood Memories App</h1>
        <Navigation />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartoons" element={<CartoonList cartoons={cartoons} />} />
          <Route path="/movies" element={<MovieList movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
