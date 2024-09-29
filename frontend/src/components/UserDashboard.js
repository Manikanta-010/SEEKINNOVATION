import React,  { useState, useEffect } from 'react';
import './styles/UserDashboard.css';  
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LogoContainer1 from './LogoContainer1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const UserDashboard = () => {


  const location = useLocation(); 
  const navigate = useNavigate();
  const { state } = useLocation();

  const [fullName, setFullName] = useState('');
  const [position, setPosition] = useState(''); 
  const [country, setCountry] = useState('');
  const [company, setCompany] = useState('');
  const [profilePic, setProfilePic] = useState('');

  useEffect(() => {

    if (location.state) {
      setFullName(location.state.fullName || 'Your Name');
      setPosition(location.state.position || 'Position');
      setCountry(location.state.country || 'Country Name');
      setCompany(location.state.company || 'Current Company');

      setProfilePic(location.state.profilePic);
 

    }

  }, [location.state]);

  const handleMyProfile = () => {
    if (state.role === 'Contractor/Buyer') {
      navigate('/buyer-dashboard', { state: { fullName, company, position, country,role: state.role } });
    } else if(state.role === 'Supplier/OEM') 
    {
      navigate('/supplier-dashboard', { state: { fullName, company, position, country,role: state.role  } });
    }
    else{
      navigate('/cluster-dashboard', { state: { fullName, company, position, country,role: state.role  } });
    }
  };

  return (
    <div className='Dashboard9'>
    <div className="user-dashboard-container">
      <LogoContainer1 />
    
      <div className="dashboard-main">
    
    <div className="profile-card">
 
    <div className="profile-info">
     
      <div className="profile-picture-container">
        {profilePic ? (
          <img
            src={profilePic}
            alt="Profile"
            className="profile-picture"
          />
        ) : (
          <FontAwesomeIcon icon={faCamera} className="camera-icon" size="3x" />
        )}
      </div>
     

      
     
      <div className="profile-details">
         <div className='profile-button'>
          <button className="btn btn-profile" onClick={handleMyProfile}>My Profile</button>
           
         </div>
      
        <h3 className="profile-name"> <p><strong>     </strong> {fullName}</p></h3>
        <p className="profile-position"><p><strong>   </strong> {position}</p></p>
        <div className="progress-container">
          <p>Profile Completion: 80%</p>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: '80%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  <div className="ud-welcome-content">
    <h3>Welcome to your Dashboard</h3>
    <p>
      Here, you can manage your profile, explore matching areas, and review
      urgent requests.
    </p>
    <a href="/suggestions" className="suggestions-link">
      Send us your Suggestions
    </a>
    <br/><br/><br/>
    <Link to='/contact'>
    <button className="btn btn-contact">Contact Us</button>
    </Link>
  </div>
</div>
    

     
      <div className="dashboard-cards9">
       
        <div className="dashboard-card profile-completion-card">
         
          <h4>I completed my profile</h4>
          
          <button className="btn-look" onClick={handleMyProfile}>Look</button>
        
          <div className="card-background-img1"></div>
        </div>

        
        <div className="middle-cards">
          <div className="dashboard-card matching-card">
            <h4>Matching Area</h4>
            <a href='/matching-area'>
            <button className="btn-look">Look</button>
            </a>
            <div className="card-background-img2"></div>
          </div>
          <div className="dashboard-card urgent-requests-card">
            <h4>Urgent Requests</h4>
            <a href='/urgent-requests'>
            <button className="btn-look">Look</button>
            </a>
            <div className="card-background-img3"></div>
          </div>
        </div>

       
        <div className="dashboard-card agenda-card">
          <h4>My Agenda</h4>
          <a href='/myagenda'>
          <button className="btn-look">Look</button>
          </a>
          <div className="card-background-img4"></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserDashboard;
