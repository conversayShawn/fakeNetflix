import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ authenticated, onLogout, username }) => {
  const handleLogout = () => {
    // Log the user out
    onLogout();
  };

  return (
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        {authenticated ? (
          <>
            <li>
              <Link to="/cartoons">Cartoons</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
      <div className="user-info">
        {authenticated && (
          <>
            <span>Hello, {username}</span>
            <button className='logout-btn' onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
