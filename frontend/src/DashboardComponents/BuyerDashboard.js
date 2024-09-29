import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faComments, faUser, faCamera, faPencilAlt, faSave,faArrowRight, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import SectorPopup from './SectorPopup';
import SectorAndApplication from './SectorAndApplication';
import ActivityForm from './ActivityForm';

const BuyerDashboard = () => {
  const location = useLocation();
  const navigate= useNavigate();  
  const { state } = useLocation(); 
  const [needs, setNeeds] = useState([]);
  const [selectedSectors, setSelectedSectors] = useState([]);


  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isPopupVisible, setIsPopupVisible] = useState(true);

 
  const [isEditingProfilePic, setIsEditingProfilePic] = useState(false);
  const [isEditingCompanyLogo, setIsEditingCompanyLogo] = useState(false);
  const [isEditingDetails, setIsEditingDetails] = useState(false);
  const [isEditingAbout, setIsEditingAbout] = useState(false);

  const [profilePic, setProfilePic] = useState('');
  const [companyLogo, setCompanyLogo] = useState('logo.png');
  const [aboutCompany, setAboutCompany] = useState('');
 
  const [fullName, setFullName] = useState('');
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [country, setCountry] = useState('');


  const [showMaterials, setShowMaterials] = useState(false);
  const [showQuantity, setShowQuantity] = useState(false);
  const [showTiming, setShowTiming] = useState(false);
  const [othersChecked, setOthersChecked] = useState(false);  
  const [othersText, setOthersText] = useState(''); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
      
    const popupShown = localStorage.getItem('popupShown');
    const role = location.state?.role;
    if (!popupShown) {
      setIsPopupVisible(true);  
      localStorage.setItem('popupShown', 'true');  
    }
    if (location.state && location.state.needs ) {
      setNeeds(location.state.needs);
   
    }
    if (location.state) {
      setFullName(location.state.fullName || '');
      setCountry(location.state.country || 'Country Name');
      setCompany(location.state.company || 'Current Company');
      setPosition(location.state.position || 'Position');
      setProfilePic(location.state.profilePic);
      setSelectedSectors(location.state.sectors || []); 
    }

  }, [location.state]);  

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    
    setProfilePic(URL.createObjectURL(file));
  };
  const handleDashboard = () => {
    navigate('/userdashboard', { state: { profilePic } });  
  };

  const handleCompanyLogoChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setCompanyLogo(URL.createObjectURL(file));
  };

  const handleSaveDetails = () => setIsEditingDetails(false);
  const handleSaveAbout = () => setIsEditingAbout(false);

  return (
    <div className={styles.dashboard}>
      {isPopupVisible && <SectorPopup closePopup={closePopup}  role={location.state?.role}/>}
      <div className={styles.dashboardnavbar}>
        <div className={styles.dashbarlogo}>
          <img src='images/logo.jpg'></img>
        </div>
        <div className={styles.navButtons}>
          <Link to="/contact">
            <button>Contact for Help</button>
          </Link>
          <Link to="/logout">
            <button>Logout</button>
          </Link>
        </div>
      </div>

      <div className={styles.container}>
     
        <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : styles.closed}`}>
          <button className={styles.menuToggle} onClick={toggleSidebar}>
            {isSidebarOpen ? '<' : '>'}
          </button>
          {isSidebarOpen && (
            <div className={styles.menuItems}>
              
              <button className='dashboard-btn' onClick={handleDashboard}><FontAwesomeIcon icon={faHome} /> Dashboard</button>
            
              <Link to="/profile-settings">
                <button className={styles.dashboardbtn}><FontAwesomeIcon icon={faCog} /> Profile Settings</button>
              </Link>
              <Link to="/chat">
                <button className={styles.dashboardbtn} ><FontAwesomeIcon icon={faComments} /> Agenda/Chat</button>
              </Link>
              <Link to="/profile">
                <button className={styles.dashboardbtn} ><FontAwesomeIcon icon={faUser} /> Profile</button>
              </Link>
            </div>
          )}
        </div>

       
        <div className={styles.content}>
          <div className={styles.profileSection}>

          <div className={styles.profileSection}>
              <div className={styles.profileAndLogo}>
              
                <div className={styles.profilePic}>
                  {isEditingProfilePic ? (
                    <>
                      <input type="file" onChange={handleProfilePicChange} id="file-upload" />
                      <label htmlFor="file-upload" className={styles.uploadButton}>Choose File</label>
                      <button className={styles.saveButton} onClick={() => setIsEditingProfilePic(false)}>
                        <FontAwesomeIcon icon={faSave} /> Save
                      </button>
                    </>
                  ) :(
                    <>
                      <img src={profilePic} alt="Profile" className={styles.profileImg} />
                      <FontAwesomeIcon icon={faPencilAlt} onClick={() => setIsEditingProfilePic(true)} className={styles.editIcon} />
                    </>
                  )}
                </div>

               
                <div className={styles.companyLogo}>
                  {isEditingCompanyLogo ? (
                    <>
                      <input type="file" onChange={handleCompanyLogoChange} />
                      <button onClick={() => setIsEditingCompanyLogo(false)}>
                        <FontAwesomeIcon icon={faSave} /> Save
                      </button>
                    </>
                  ) : (
                    <>
                      <img src={companyLogo} alt="Company Logo" className={styles.logoImg} />
                      <div className={styles.placeholder}> </div>
                      <FontAwesomeIcon icon={faPencilAlt} onClick={() => setIsEditingCompanyLogo(true)} className={styles.editIcon} />
                    </>
                  )}
                </div>
                
              </div>
            </div>


             <div className={styles.detailsSection}>
            <div className={styles.detailsSection1}>
              <p><strong>Full Name:</strong> {fullName}</p>
              <p><strong>Country:</strong> {country}</p>  
            </div>
            <div className={styles.detailsSection2}> 
              <p><strong>Company:</strong> {company}</p>
              <p><strong>Position:</strong> {position}</p>
            </div>
            </div>
          

            <div className={styles.aboutAndActivityContainer}>
          <div className={styles.aboutSection}>
            {isEditingAbout ? (
              <textarea
                value={aboutCompany}
                onChange={(e) => setAboutCompany(e.target.value)}
                className={styles.aboutTextarea}
                placeholder="About the company..."
              />
            ) : (
              <p>{aboutCompany || "About the company..."}</p>
            )}
            {isEditingAbout ? (
              <button onClick={handleSaveAbout}><FontAwesomeIcon icon={faSave} /> Save</button>
            ) : (
              <button onClick={() => setIsEditingAbout(true)}>Edit</button>
            )}
          </div>



          <div className={styles.activityformsection}>
          <ActivityForm />
          </div>

          </div>
          <br/>

          <div className={styles.sectorandapplicationsection}>
          <SectorAndApplication />
          </div>
          

         
          
           
       

 
  

          <div className={styles.offersNeeds}>
          
            <div className={styles.column}>
              <h3>Add your Needs</h3>
              <h5> To provide you the best match, we will need you to add all needs you have</h5>
              <br/>
              {needs.length > 0 && (
                <h4>{needs[0].sector.toUpperCase()}</h4>
              )}
              <div className={styles.offersDisplay}>
                {needs.map((need, index) => (
                  <div key={index} className={styles.offerItem}>
                    <h5>{need.category.toUpperCase()}</h5>
                    <ul className={styles.subcategoryList}>
                      {need.subcategories.map((subcategory, subIndex) => (
                        <li key={subIndex} className={styles.subcategoryItem}>
                          {subcategory}
                        </li>
                      ))}
                    </ul>
                  </div>
              ))}
              </div>
            </div>


             <div className={styles.column2}>
                  <h3>Additional questions to improve future matchmaking</h3>
                  <br/>
                  <div>
                    <h5 onClick={() => setShowMaterials(!showMaterials)} style={{ cursor: 'pointer' }} className={styles.collapsibleHeader} >
                      Materials Processed {showMaterials ? '▲' : '▼'}
                    </h5>
                    {showMaterials && (
                      <div className={styles.checkboxGroup1}>
                        <label><input type="checkbox" /> Steels</label><br />
                        <label><input type="checkbox" /> Inconel</label><br />
                        <label><input type="checkbox" /> Stainless steels</label><br />
                        <label><input type="checkbox" /> Superalloys</label><br />
                        <label><input type="checkbox" /> Titanium</label><br />
                        <label><input type="checkbox" /> Aluminium & Alloys</label><br />
                        <label><input type="checkbox" /> Non-ferrous metals</label><br />
                        <label><input type="checkbox" /> Composites</label><br />
                        <label><input type="checkbox" /> Plastics</label><br />
                        <label><input type="checkbox" /> Thermoplastics</label><br />
                        <label><input type="checkbox" /> Ceramics</label><br />
                        <div  className={styles.othersContainer}>
                        <label>
                            <input 
                              type="checkbox" 
                              checked={othersChecked} 
                              onChange={(e) => setOthersChecked(e.target.checked)} 
                            /> 
                            Others:
                        </label>
                        {othersChecked && (
                        <input 
                          type="text" 
                          placeholder="Please specify" 
                          value={othersText} 
                          onChange={(e) => setOthersText(e.target.value)} 
                          className={styles.othersInput} 
                        />
                      )}
                      </div>
                      </div>
                    )}
                  </div><br/>
                  <div>
                    <h5 onClick={() => setShowQuantity(!showQuantity)} style={{ cursor: 'pointer' }}  className={styles.collapsibleHeader} >
                      Quantity {showQuantity ? '▲' : '▼'}
                    </h5>
                    {showQuantity && (
                      <div className={styles.checkboxGroup}>
                        <label><input type="checkbox" /> Prototype, less than 10 parts</label><br />
                        <label><input type="checkbox" /> Small series (11 to 51 parts)</label><br />
                        <label><input type="checkbox" /> Medium series (51 to 500 parts)</label><br />
                        <label><input type="checkbox" /> Large series (501 to 5000 parts)</label>
                      </div>
                    )}
                  </div><br/>

                  <div>
                  <h5 onClick={() => setShowTiming(!showTiming)} style={{ cursor: 'pointer' }}  className={styles.collapsibleHeader} >
                    Timing {showTiming ? '▲' : '▼'}
                  </h5>
                  {showTiming && (
                    <div className={styles.timingInput}>
                      <input type="text" placeholder="Specify timing requirements" className={styles.inputField} />
                    </div>
                  )}
                </div>
             </div>       
          </div>

          
          <div className={styles.otherSettings}>
            <Link to='/needs'>
              <button>Modify Needs</button>
            </Link>
          </div>
        </div>
      </div>

    </div>
    </div>
  );
};

export default BuyerDashboard;