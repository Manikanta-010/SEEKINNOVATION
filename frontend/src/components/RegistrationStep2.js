import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './styles/RegistrationStep2.css';
import LeftSection from './LeftSection';
 

const RegistrationStep2 = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);  

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleNext1 = () => setStep(2);
  const handleBack = () => setStep(1);
  const handleNext2 = () => {
    navigate('/registration-step3', { state: { role: state.role, email } });
  };

  return (
    <div className="registration-step2-register-container">
       <LeftSection imageSrc="images/bg2.jpeg" />
      <div className="registration-step2-right-section">
    
        <div className="registration-step2-logo-section">
          <img src="images/logo.jpg" alt="Logo" className="registration-step2-logo" />
        </div>
        {step === 1 ? (
          <div className="registration-step2-form-section">
            <h2>{state.role} Registration</h2><br/>
            <div className="registration-step2-form-group">
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder='Enter your Email Id'
                value={email}
                onChange={handleEmailChange}
                required
              />
              <br/><br/><br/><br/>
            </div>
            <div className="registration-step2-button-group">
              <button className="btn registration-step2-back-btn" onClick={() => navigate(-1)}>
                ← Back
              </button>
              <button className="btn registration-step2-next-btn" onClick={handleNext1}>
                Following →
              </button>
            </div><br/>
            <p className="registration-step2-already-registered">
              Already registered? <a href="/login">Click here</a>
            </p>
          </div>
        ) : (
          <div className="registration-step2-form-section">
            <h2>{state.role} Registration</h2>
            <br/><br/>
            <div className="registration-step2-form-group">
              <label htmlFor="password"></label>
              <input type="password" id="password" className="form-control" placeholder='Create Password' required />
            </div>
          
            <div className="registration-step2-form-group">
              <label htmlFor="password"></label>
              <input type="password" id="confirm-password" className="form-control" placeholder='Confirm Password' required />
            </div>
            <br/><br/>
            <div className="registration-step2-button-group">
              <button className="btn registration-step2-back-btn" onClick={handleBack}>
                ← Back
              </button>
              
              <button className="btn registration-step2-next-btn" onClick={handleNext2}>
                Following →
              </button>
            </div> 
            <p className="registration-step2-already-registered">
              Already registered? <a href="/login">Click here</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationStep2;
