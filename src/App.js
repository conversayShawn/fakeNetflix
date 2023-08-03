import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartoonList from "./components/CartoonList";
import MovieList from "./components/MovieList";

const App = () => {
  const [cartoons, setCartoons] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch cartoons data
    axios.get("/data/cartoons.json").then((response) => {
      setCartoons(response.data);
      setLoading(false);
    });

    // Fetch movies data
    axios.get("/data/movies.json").then((response) => {
      setMovies(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                {loading ? (
                  <h1>Loading...</h1>
                ) : (
                  <>
                    <h1>Childhood Memories App</h1>
                    <h3>Cartoons</h3>
                    <CartoonList cartoons={cartoons} />
                    <h3>Movies</h3>
                    <MovieList movies={movies} />
                  </>
                )}
              </React.Fragment>
            }
          ></Route>
          {/* Add more routes and components for other pages if needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
