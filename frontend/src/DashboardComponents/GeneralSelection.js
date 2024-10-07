import React, { useState, useEffect } from 'react';
import styles from './GeneralSelection.module.css';
import { useLocation, useNavigate} from 'react-router-dom';
 

const GeneralSelection = ({ onSave }) => {
  const [selectedGeneral, setSelectedGeneral] = useState([]);
  const [selectedSectors, setSelectedSectors] = useState([]);
  const [isOpen, setIsOpen] = useState(true);  

  const location = useLocation();
  const navigate = useNavigate();
  const { state} = useLocation();
  const { sectors, role } = location.state || {};

  const generalOptions = [
    "Patents / Technologies", "Consulting", "Design", "Engineering", "Partnership", "Prototyping"
  ];
  
  useEffect(() => {
    if (sectors) {
      setSelectedSectors(sectors);  
    }
  }, [sectors]);

  const handleGeneralSelect = (option) => {
    setSelectedGeneral((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  const handleSave = () => {
    if (state.role === 'Contractor/Buyer') {
      navigate('/needs', { state: { sectors: selectedSectors, general: selectedGeneral } });
    }
    else {
      navigate('/offers', { state: { sectors: selectedSectors, general: selectedGeneral } });
    }
     
  };

  const handleClose = () => {
    setIsOpen(false);  
  };

  if (!isOpen) return null; 

  return (
    
    <div className={styles['general-popupOverlay']}>
      <div className={styles['general-popup']}>
        <button className={styles['general-closeBtn']} onClick={handleClose}>
          &times;  
        </button>
        <br/><br/>
        <h2>Select General Options</h2>
        {generalOptions.map((option) => (
          <div key={option} className={styles['general-item']}>
            <input
              type="checkbox"
              checked={selectedGeneral.includes(option)}
              onChange={() => handleGeneralSelect(option)}
            />
            <label>{option}</label>
          </div>
        ))}
        <button onClick={handleSave} className={styles['general-saveBtn']}>Save</button>
      </div>
    </div>
    
  );
};

export default GeneralSelection;
