// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/main-page/Home';
// import CartoonList from './components/cartoons/CartoonList';
// import MovieList from './components/movies/MovieList';
// import Navigation from './components/main-page/Navigation';

// const App = () => {
//   const [cartoons, setCartoons] = useState([]);
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     // Fetch cartoons data
//     axios.get('/data/cartoons.json').then((response) => {
//       setCartoons(response.data);
//     });

//     // Fetch movies data
//     axios.get('/data/movies.json').then((response) => {
//       setMovies(response.data);
//       // setLoading(false);
//     });
//   }, []);

//   return (
//     <Router>
//       <div className="app">
//         <h1>Childhood Memories App</h1>
//         <Navigation />
//         <hr />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/cartoons" element={<CartoonList cartoons={cartoons} />} />
//           <Route path="/movies" element={<MovieList movies={movies} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/main-page/Home';
import Login from './components/main-page/Login';
import CartoonList from './components/cartoons/CartoonList';
import MovieList from './components/movies/MovieList';
import Navigation from './components/main-page/Navigation'

const App = () => {
  // Use state to manage the authentication status
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <div className="app">
        <h1>Childhood Memories App</h1>
        <Navigation authenticated={authenticated} />
        <hr />
        <Routes>
          {/* Render Home or Navigate to /login based on authentication */}
          <Route
            path="/"
            element={authenticated ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
          <Route path="/cartoons" element={<CartoonList />} />
          <Route path="/movies" element={<MovieList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
