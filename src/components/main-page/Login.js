// import React from "react";

// const Login = () => {
//   return (
//     <form className="login-form-container">
//       <input type="text" placeholder="username"></input>
//       <input type="password" placeholder="password"></input>
//     </form>
//   );
// };

// export default Login;

import React, { useState } from 'react';

const Login = ({ setAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Simulate authentication process
  const handleLogin = (e) => {
    e.preventDefault();

    // Perform authentication checks, e.g., username and password validation
    // For simplicity, we will just set authenticated to true if any username and password are provided
    if (formData.username && formData.password) {
      setAuthenticated(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleLogin}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
