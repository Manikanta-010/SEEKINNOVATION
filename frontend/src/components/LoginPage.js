import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/LoginPage.css';
import LeftSection from './LeftSection';
 

import SignInPopup from './SignInPopup';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleLogin = (event) => {
    event.preventDefault(); 
    console.log('Logged in with:', { email, password });
    setShowPopup(true); 
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    navigate('/buyer-dashboard');   
  };

  return (
    <div className='loginpage-login-container'>
      <LeftSection imageSrc="images/pictures/picture1.jpg" />
      <div className="loginpage-right-section">
        <div className="loginpage-logo-section">
          <img src="images/logo.jpg" alt="Logo" className="loginpage-logo" />
        </div>
        <div className="loginpage-form-section">
          <h2>Login</h2>
          <br />
          <form onSubmit={handleLogin}>
            <div className="loginpage-form-group">
              <label htmlFor="email"> </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your Email Id"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="loginpage-form-group">
              <label htmlFor="password"> </label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                placeholder="Enter your password"
                onChange={handlePasswordChange}
                required
              />
              <br /><br /><br />
            </div>
       
              <button type="submit" className="btn loginpage-login-btn">Login</button>
         
          </form><br/>
          <p className="loginpage-register-link">
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </div>
      </div>
      {showPopup && <SignInPopup onClose={handlePopupClose} />}
    </div>
  );
};

export default LoginPage;
