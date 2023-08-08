import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/main-page/Home';
import Login from './components/main-page/Login';
import CartoonList from './components/cartoons/CartoonList';
import MovieList from './components/movies/MovieList';
import Navigation from './components/main-page/Navigation';
import axios from 'axios';

const App = () => {
  // Use state to manage the authentication status
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [cartoons, setCartoons] = useState([]);
  const [movies, setMovies] = useState([]);

  const handleLogin = (user) => {
    setUsername(user);
    setAuthenticated(true);
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setUsername('');
  };

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
        <Navigation authenticated={authenticated} username={username} onLogout={handleLogout} />
        <hr />
        <Routes>
          {/* Render Home or Navigate to /login based on authentication */}
          <Route path="/" element={authenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/cartoons" element={<CartoonList cartoons={cartoons} />} />
          <Route path="/movies" element={<MovieList movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
