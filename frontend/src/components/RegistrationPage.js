import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import './styles/RegisterPage.css';
import LeftSection from './LeftSection';

const RegistrationPage = () => {
  const navigate = useNavigate();  
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [country, setCountry] = useState('');

 
  const handleRoleChange = (event) => setSelectedRole(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value);
  const handleFullNameChange = (event) => setFullName(event.target.value);
  const handleCompanyChange = (event) => setCompany(event.target.value);
  const handlePositionChange = (event) => setPosition(event.target.value);
  const handleCountryChange = (event) => setCountry(event.target.value);

  const handleNextStep = () => setStep(step + 1);
  const handlePreviousStep = () => setStep(step - 1);

   
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Registration completed!');
    navigate('/userdashboard', { 
      state: { 
        fullName, 
        company, 
        position, 
        country, 
        role: selectedRole   
      } 
    });
  };

  return (
    <div className="register-page-register-container">
      <LeftSection videoSrc="videos/video1.mp4" />
      <div className="register-page-right-section">
        <div className="register-page-logo-section">
          <img src="images/logo.jpg" alt="Logo" className="register-page-logo" />
        </div>

  
        {step === 1 && (
          <div className="register-page-form-section">
            <form onSubmit={handleNextStep}>
      
              <div className="register-page-form-group">
                <input type="radio" id="contactor" name="role" value="Contractor/Buyer" onChange={handleRoleChange} />
                <label htmlFor="contactor">Contractor/Buyer</label>
              </div>
              <div className="register-page-form-group">
                <input type="radio" id="supplier" name="role" value="Supplier/OEM" onChange={handleRoleChange} />
                <label htmlFor="supplier">Supplier/OEM</label>
              </div>
              <div className="register-page-form-group">
                <input type="radio" id="cluster" name="role" value="Cluster/Government" onChange={handleRoleChange} />
                <label htmlFor="cluster">Cluster/Government</label>
              </div>
              <button type="submit" className="register-page-register-btn">
                Next →
              </button>
            </form>
          </div>
        )}
 
        {step === 2 && (
          <div className="registration-step2-form-section">
            <h2>{selectedRole} Registration</h2>
            <div className="registration-step2-form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your Email Id"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="registration-step2-form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Create Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="registration-step2-form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>
            <div className="registration-step2-button-group">
              <button className="btn registration-step2-back-btn" onClick={handlePreviousStep}>
                ← Back
              </button>
              <button className="btn registration-step2-next-btn" onClick={handleNextStep}>
                Following →
              </button>
            </div>
          </div>
        )}

      
        {step === 3 && (
          <div className="registration-step3-form-section">
            <h2>{selectedRole} Registration</h2>
            <div className="registration-step3-form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
                value={fullName}
                onChange={handleFullNameChange}
                required
              />
            </div>
            <div className="registration-step3-form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your current company"
                value={company}
                onChange={handleCompanyChange}
                required
              />
            </div>
            <div className="registration-step3-form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your position"
                value={position}
                onChange={handlePositionChange}
                required
              />
            </div>
            <div className="registration-step3-form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your country"
                value={country}
                onChange={handleCountryChange}
                required
              />
            </div>
            <div className="registration-step3-button-group">
              <button className="btn registration-step3-back-btn" onClick={handlePreviousStep}>
                ← Back
              </button>
              <button className="btn registration-step3-next-btn" onClick={handleSubmit}>
                Register →
              </button>
            </div>
          </div>
        )}

        <p className="register-page-already-registered">
          Already registered? <a href="/login">Click here</a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
