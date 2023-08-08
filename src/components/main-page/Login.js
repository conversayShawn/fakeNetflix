import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  // Simulate authentication process
  const handleLogin = (e) => {
    e.preventDefault();

    // Perform authentication checks, e.g., username and password validation
    // For simplicity, we will just set authenticated to true if any username and password are provided
    if (formData.username && formData.password) {
      onLogin(formData.username);
      navigate('/');
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
    <div className="login-container">
      <h2 className="login-header">Login Form</h2>
      <form className="login-form">
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button className="login-btn" type="submit" onClick={(e) => handleLogin(e)}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
