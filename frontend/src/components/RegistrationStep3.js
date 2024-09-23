import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './styles/RegistrationStep3.css';
import LeftSection from './LeftSection';


const RegistrationStep3 = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [country, setCountry] = useState('');

  const handleFullNameChange = (event) => setFullName(event.target.value);
  const handleCompanyChange = (event) => setCompany(event.target.value);
  const handlePositionChange = (event) => setPosition(event.target.value);
  const handleCountryChange = (event) => setCountry(event.target.value);

  const handleSubmit = () => {
    alert('Registration completed!');
    navigate('/userdashboard', { state: { fullName, company, position, country } });
  };

  return (
    <div className="registration-step3-register-container">
      <LeftSection imageSrc="images/bg2.jpeg" />
      <div className="registration-step3-right-section">
      
        <div className="registration-step3-form-section">
          <h2>{state.role} Registration</h2><br/>
          
          <div className="registration-step3-form-group">
            <label htmlFor="fullName">  </label>
            <input
              type="text"
              id="fullName"
              className="form-control"
              placeholder="Enter your full name"
              value={fullName}
              onChange={handleFullNameChange}
              required
            />
          </div>
          <br/>

          <div className="registration-step3-form-group">
            <label htmlFor="company">  </label>
            <input
              type="text"
              id="company"
              className="form-control"
              placeholder="Enter your current company"
              value={company}
              onChange={handleCompanyChange}
              required
            />
          </div>
          <br/>

          <div className="registration-step3-form-group">
            <label htmlFor="position">  </label>
            <input
              type="text"
              id="position"
              className="form-control"
              placeholder="Enter your position"
              value={position}
              onChange={handlePositionChange}
              required
            />
          </div>
          <br/>

          <div className="registration-step3-form-group">
            <label htmlFor="country">   </label>
            <input
              type="text"
              id="country"
              className="form-control"
              placeholder="Enter your country"
              value={country}
              onChange={handleCountryChange}
              required
            />
          </div>
          <br/>

          <div className="registration-step3-button-group">
            <button className="btn registration-step3-back-btn" onClick={() => navigate(-1)}>
              ← Back
            </button>
            <button className="btn registration-step3-next-btn" onClick={handleSubmit}>
              Register →
            </button>
          </div>
          <br/>
          <p className="registration-step3-already-registered">
            Already registered? <a href="/login">Click here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationStep3;
