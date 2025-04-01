import React, { useEffect, useRef, useState } from 'react';
import newStyles from './NewbuyerDashboard.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SectorPopup from './SectorPopup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faCog, faComments, faHome, faPencilAlt, faSave, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import ActivityForm from './ActivityForm';

const NewBuyerDashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const role = location.state?.role || "defaultRole";
    const [needs, setNeeds] = useState([]);
    const prevProfilePic = useRef('');
    const prevCompanyLogo = useRef('');


    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isPopupVisible, setIsPopupVisible] = useState(true);
    const [isEditingProfilePic, setIsEditingProfilePic] = useState(false);
    const [isEditingCompanyLogo, setIsEditingCompanyLogo] = useState(false);
    const [isEditingAbout, setIsEditingAbout] = useState(false);


    const [profilePic, setProfilePic] = useState('');
    const [selectedSectors, setSelectedSectors] = useState([]);
    const [companyLogo, setCompanyLogo] = useState('');
    const [aboutCompany, setAboutCompany] = useState('');
    const [saved, setSaved] = useState(false);



    const [videoOrImg, setVideoOrImg] = useState([]);
    const [videoOrImgType, setVideoOrImgType] = useState('');
    const [isEditingVideoOrImg, setIsEditingVideoOrImg] = useState(false);

    const handleVideoOrImgChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileType = file.type.startsWith("image") ? "image" : "video";
            const fileUrl = URL.createObjectURL(file);
            setVideoOrImg(fileUrl);
            setVideoOrImgType(fileType);
            setIsEditingVideoOrImg(false);
        }
    };
    const handleDeleteVideoOrImg = () => {
        setVideoOrImg(null);
        setVideoOrImgType(null);
    };

    const [formData, setFormData] = useState({
        fullName: "",
        position: "",
        company: "",
        location: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };


    useEffect(() => {
        const popupShown = localStorage.getItem('popupShown');
        if (!popupShown) {
            setIsPopupVisible(true);
            localStorage.setItem('popupShown', 'true');
        }
        if (location.state) {
            setProfilePic(location.state.profilePic || 'defaultProfilePic.png');
            setSelectedSectors(location.state.selectedSectors || []);
            setNeeds(location.state.needs || []);

            setFormData((prevData) => ({
                ...prevData,
                fullName: location.state.fullName || '',
                position: location.state.position || '',
                company: location.state.company || '',
                location: location.state.location || '',
            }));
        }
    }, [location.state]);

    useEffect(() => {

        return () => {
            if (prevProfilePic.current && prevProfilePic.current.startsWith("blob:")) {
                URL.revokeObjectURL(prevProfilePic.current);
            }
            if (prevCompanyLogo.current && prevCompanyLogo.current.startsWith("blob:")) {
                URL.revokeObjectURL(prevCompanyLogo.current);
            }

            prevProfilePic.current = profilePic;
            prevCompanyLogo.current = companyLogo;
        };
    }, [profilePic, companyLogo]);

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    const handleNavigation = (path) => {
        setIsSidebarOpen(false);
        setTimeout(() => {
            navigate(path)
        }, 300);
    }

    const handleDashboard = () => {
        navigate('/userdashboard', { state: { profilePic } });
    };

    const handleProfilePicChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (profilePic && profilePic.startsWith("bold")) {
                URL.revokeObjectURL(profilePic);
            }
            const imageUrl = URL.createObjectURL(file);
            setProfilePic(imageUrl);
            setIsEditingProfilePic(false);
        }
    };

    const handleDeleteProfilePic = () => {
        setProfilePic(null);
    };

    const handleCompanyLogoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setCompanyLogo(imageUrl);
            setIsEditingCompanyLogo(false);
        }
    };

    const handleDeleteCompanyLogo = () => {
        setCompanyLogo(null);
    };

    const handleSaveAbout = () => {
        setIsEditingAbout(false);
        setSaved(true);

        setTimeout(() => {
            setSaved(false);
        }, 1000);
    }

    return (
        <>
            <div className={newStyles.dashboardContainer}>
                {isPopupVisible && <SectorPopup closePopup={closePopup} role={location.state?.role} />}
                <div className={newStyles.newdashboardNavbar}>
                    <div className={newStyles.newdashbarlogo}>
                        <img src="images/logo.jpg" alt="Company Logo" />
                    </div>
                    <div className={newStyles.newnavButtons}>
                        <Link to="/contact">
                            <button>Contact for Help</button>
                        </Link>
                        <Link to="/">
                            <button>Logout</button>
                        </Link>
                    </div>
                </div>


                <div className={newStyles.newContainer}>
                    {/* Left Sidebar */}
                    <nav className={`${newStyles.newSidebar} ${isSidebarOpen ? newStyles.open : newStyles.closed}`} aria-label="Sidebar Navigation">
                        <button
                            className={newStyles.newMenuToggle}
                            onClick={toggleSidebar}
                            aria-label={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
                            aria-expanded={isSidebarOpen}
                        >
                            <FontAwesomeIcon icon={isSidebarOpen ? faAngleLeft : faAngleRight} />
                        </button>

                        {isSidebarOpen && (
                            <div className={newStyles.newMenuContainer}>
                                <Link to="/userdashboard" className={newStyles.newMenuButton} aria-label="Go to Dashboard">
                                    <FontAwesomeIcon icon={faHome} /> Dashboard
                                </Link>
                                <Link to="/profile-settings" className={newStyles.newMenuButton} aria-label="Go to Profile Settings">
                                    <FontAwesomeIcon icon={faCog} /> Profile Settings
                                </Link>
                                <Link to="/agenda" className={newStyles.newMenuButton} aria-label="Go to Agenda/Chat">
                                    <FontAwesomeIcon icon={faComments} /> Agenda
                                </Link>
                                <Link to="/profile" className={newStyles.newMenuButton} aria-label="Go to Profile">
                                    <FontAwesomeIcon icon={faUser} /> Profile
                                </Link>
                            </div>
                        )}
                    </nav>


                    {/* Right part */}
                    <div className={newStyles.newRightContainer}>
                        <div className={newStyles.newInRightTopSection}>
                            <div className={newStyles.newCompanyInfo}>
                                <div className={newStyles.inputField}>
                                    <label htmlFor="fullName">Full Name:</label>
                                    <input id="fullName" type="text" placeholder="Enter Full Name"
                                        name="fullName" value={formData.fullName} onChange={handleChange} />
                                </div>

                                <div className={newStyles.inputField}>
                                    <label htmlFor="position">Position:</label>
                                    <input id="position" type="text" placeholder="Enter Position"
                                        name="position" value={formData.position} onChange={handleChange} />
                                </div>

                                <div className={newStyles.inputField}>
                                    <label htmlFor="company">Company:</label>
                                    <input id="company" type="text" placeholder="Enter Company"
                                        name="company" value={formData.company} onChange={handleChange} />
                                </div>

                                <div className={newStyles.inputField}>
                                    <label htmlFor="location">Location:</label>
                                    <input id="location" type="text" placeholder="Enter Location"
                                        name="location" value={formData.location} onChange={handleChange} />
                                </div>
                            </div>

                            <div className={newStyles.newUploadContainer}>
                                <div className={newStyles.newLogoUpload}>
                                    {!profilePic && (
                                        <label htmlFor="profilePicUpload">Upload Profile Pic:</label>
                                    )}
                                    {isEditingProfilePic ? (
                                        <>
                                            <input id="profilePicUpload" type="file" accept="image/*" onChange={handleProfilePicChange} />
                                            <button className={newStyles.newSaveButton} onClick={() => setIsEditingProfilePic(false)}>
                                                <FontAwesomeIcon icon={faSave} /> Save
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            {profilePic ? (
                                                <>
                                                    <img src={profilePic} alt="profile" className={newStyles.newProfileImg} />
                                                    <FontAwesomeIcon icon={faTrash} onClick={handleDeleteProfilePic} className={newStyles.newDeleteIcon} />
                                                </>
                                            ) : (
                                                <>
                                                    <FontAwesomeIcon icon={faPencilAlt} onClick={() => setIsEditingProfilePic(true)} className={newStyles.newEditIcon} />
                                                </>
                                            )}
                                        </>

                                    )}
                                </div>

                                <div className={newStyles.newLogoUpload}>
                                    {!companyLogo && (
                                        <label htmlFor="companyLogoUpload">Upload Company Logo:</label>
                                    )}
                                    {isEditingCompanyLogo ? (
                                        <>
                                            <input id="companyLogoUpload" type="file" accept="image/*" onChange={handleCompanyLogoChange} />
                                            <button className={newStyles.newSaveButton} onClick={() => setIsEditingCompanyLogo(false)}>
                                                <FontAwesomeIcon icon={faSave} /> Save
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            {companyLogo ? (
                                                <>
                                                    <img src={companyLogo} alt="Company Logo" className={newStyles.newlogoImg} />
                                                    <FontAwesomeIcon icon={faTrash} onClick={handleDeleteCompanyLogo} className={newStyles.newDeleteIcon} />
                                                </>
                                            ) : (
                                                <>
                                                    <FontAwesomeIcon icon={faPencilAlt} onClick={() => setIsEditingCompanyLogo(true)} className={newStyles.newEditIcon} />
                                                </>
                                            )}
                                        </>
                                    )}
                                </div>

                                <div className={newStyles.newVideoOrImgUpload}>
                                    {!videoOrImg && (
                                        <label htmlFor="videoOrImgUpload">Upload Video/Image:</label>
                                    )}
                                    {isEditingVideoOrImg ? (
                                        <>
                                            <input
                                                id="videoOrImgUpload"
                                                type="file"
                                                accept="video/*, image/*"
                                                onChange={handleVideoOrImgChange}
                                            />
                                            <button className={newStyles.newSaveButton} onClick={() => setIsEditingVideoOrImg(false)}>
                                                <FontAwesomeIcon icon={faSave} /> Save
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            {videoOrImg ? (
                                                <>
                                                    {videoOrImgType === "image" ? (
                                                        <img src={videoOrImg} alt="Uploaded" className={newStyles.newlogoImg} />
                                                    ) : (
                                                        <video controls className={newStyles.newlogoImg}>
                                                            <source src={videoOrImg} type="video/mp4" />
                                                            Your browser does not support the video tag.
                                                        </video>
                                                    )}
                                                    <FontAwesomeIcon icon={faTrash} onClick={handleDeleteVideoOrImg} className={newStyles.newDeleteIcon} />
                                                </>
                                            ) : (
                                                <>
                                                    <FontAwesomeIcon icon={faPencilAlt} onClick={() => setIsEditingVideoOrImg(true)} className={newStyles.newEditIcon} />
                                                </>
                                            )}
                                        </>
                                    )}
                                </div>

                            </div>


                            <div className={newStyles.newAboutAndActivityContainer}>
                                <div className={newStyles.newAboutSection}>
                                    {isEditingAbout ? (
                                        <textarea
                                            value={aboutCompany}
                                            onChange={(e) => setAboutCompany(e.target.value)}
                                            className={newStyles.newAboutTextarea}
                                            placeholder="About the company..."
                                        />
                                    ) : (
                                        <p className={`${newStyles.newAboutText} ${saved ? newStyles.saved : ''}`}>
                                            {aboutCompany || "About the company..."}
                                        </p>
                                    )}

                                    <button
                                        onClick={isEditingAbout ? handleSaveAbout : () => setIsEditingAbout(true)}
                                        className={newStyles.newAboutButton}
                                        disabled={isEditingAbout && !aboutCompany.trim()}
                                    >
                                        <FontAwesomeIcon icon={isEditingAbout ? faSave : faPencilAlt} />
                                        {isEditingAbout ? " Save" : " Edit"}
                                    </button>
                                </div>
                            </div>
                            

                            <div>
                                <ActivityForm />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default NewBuyerDashboard;
