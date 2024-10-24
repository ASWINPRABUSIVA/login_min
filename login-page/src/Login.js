// src/Login.js

import React, { useState } from 'react';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa'; // Icons for social login
import './Login.css'; // We'll add some styles later

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign in with email</h2>
        <p>Make a new doc to bring your words, data, and teams together. For free</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="forgot-password">
  <button onClick={() => alert('Forgot password clicked')} className="link-button">
    Forgot password?
  </button>
</div>
          <button type="submit" className="login-btn">Get Started</button>
        </form>

        <div className="divider">Or sign in with</div>

        <div className="social-login">
          <button className="social-btn google"><FaGoogle /> Google</button>
          <button className="social-btn facebook"><FaFacebook /> Facebook</button>
          <button className="social-btn apple"><FaApple /> Apple</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
