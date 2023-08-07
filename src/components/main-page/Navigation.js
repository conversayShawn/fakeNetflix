// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navigation = () => {
//   return (
//     <nav>
//       <ul className='nav-bar-ul'>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/cartoons">Cartoons</Link>
//         </li>
//         <li>
//           <Link to="/movies">Movies</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navigation;

import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ authenticated }) => {
  return (
    <nav>
      <ul>
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
    </nav>
  );
};

export default Navigation;
