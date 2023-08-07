import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul className='nav-bar-ul'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cartoons">Cartoons</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
