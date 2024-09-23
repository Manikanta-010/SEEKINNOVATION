import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/RegisterPage.css';
import LeftSection from './LeftSection';
 

const RegisterPage = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedRole) {
      navigate('/registration-step2', { state: { role: selectedRole } });
    }
  };

  return (
    <div className="register-page-register-container">
      <LeftSection imageSrc="images/bg2.jpeg" />
      <div className="register-page-right-section">
        <div className="register-page-logo-section">
          <img src="images/logo.jpg" alt="Logo" className="register-page-logo" />
        </div>
        <div className="register-page-form-section">
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="register-page-register-btn">Register</button>
          </form>
          <p className="register-page-already-registered">
            Already registered? <a href="/login">Click here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
