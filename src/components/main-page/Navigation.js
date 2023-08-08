// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navigation = ({ authenticated }) => {
//   return (
//     <nav>
//       <ul className="nav-links">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         {authenticated ? (
//           <>
//             <li>
//               <Link to="/cartoons">Cartoons</Link>
//             </li>
//             <li>
//               <Link to="/movies">Movies</Link>
//             </li>
//           </>
//         ) : (
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navigation;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navigation = ({ authenticated, onLogout, username }) => {
//   const handleLogout = () => {
//     // Call the onLogout function to handle the logout logic in the parent component (App)
//     onLogout();
//   };

//   return (
//     <nav>
//       <ul className="nav-links">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         {authenticated ? (
//           <>
//             <li>
//               <Link to="/cartoons">Cartoons</Link>
//             </li>
//             <li>
//               <Link to="/movies">Movies</Link>
//             </li>
//             <li>
//               <span>Hello, {username}</span>
//             </li>
//             <li>
//               <button onClick={handleLogout}>Logout</button>
//             </li>
//           </>
//         ) : (
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navigation;

import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ authenticated, onLogout, username }) => {
  const handleLogout = () => {
    // Call the onLogout function to handle the logout logic in the parent component (App)
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
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
