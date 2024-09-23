import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import RegisterPage from './components/RegisterPage';
import RegistrationStep2 from './components/RegistrationStep2';
import RegistrationStep3 from './components/RegistrationStep3';
import LoginPage from './components/LoginPage';
import UserDashboard from './components/UserDashboard';
import Contact from './components/Contact';


import Dashboard from './DashboardComponents/Dashboard';
import GeneralSelection from './DashboardComponents/GeneralSelection';
import Offers from './DashboardComponents/Offers';
import Needs from './DashboardComponents/Needs';

 

const App = () => {
 

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/registration-step2" element={<RegistrationStep2 />} />
          <Route path="/registration-step3" element={<RegistrationStep3 />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/general-selection' element={<GeneralSelection />} />
          <Route path="/offers" element={<Offers />}/>
          <Route path="/needs" element={<Needs />}/>
 

        
        </Routes>
       
 
      </div>
    </Router>
 
  );
};

export default App;
