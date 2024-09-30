import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './auth.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className='auth-main-container'>
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form className="auth-form">
        <div className="form-group1">
          <label htmlFor="username">Username:   </label>
          <input type="text" id="username" placeholder="Enter your username" required />
        </div>
        <div className="form-group2">
          <label htmlFor="email">Email:   </label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group3">
          <label htmlFor="password">Password:   </label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="auth-button">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <p className="toggle-text">
        {isLogin ? 'Don’t have an account? ' : 'Already have an account? '}
        <NavLink to="#" onClick={handleToggle}>
          {isLogin ? 'Sign Up' : 'Login'}
        </NavLink>
      </p>
    </div>
    </div>
  );
};

export default AuthPage;
