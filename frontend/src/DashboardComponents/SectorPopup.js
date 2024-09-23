import React, { useState } from 'react';
import styles from './SectorPopup.module.css';
import { useNavigate } from 'react-router-dom';

const SectorPopup = ({ closePopup }) => {
  const [selectedSectors, setSelectedSectors] = useState([]);

  const handleSelect = (sector) => {
    if (selectedSectors.includes(sector)) {
      setSelectedSectors(selectedSectors.filter((s) => s !== sector));
    } else {
      setSelectedSectors([...selectedSectors, sector]);
    }
  };
  const navigate = useNavigate();

 
 
  const handleSave = () => {
   
    navigate('/general-selection', { state: { sectors: selectedSectors } });
    closePopup();
  };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <h3>Select Your Sector(s)</h3>
        <div className={styles.sectorList}>
          {['Aerospace', 'Defense & Security', 'Energy', 'Industry'].map((sector) => (
            <div key={sector} className={styles.sectorItem}>
              <input
                type="checkbox"
                checked={selectedSectors.includes(sector)}
                onChange={() => handleSelect(sector)}
              />
              <label>{sector}</label>
            </div>
          ))}
        </div>
        <div className={styles.sectorbuttons}>
          <button onClick={handleSave}>Save</button>
          <button onClick={closePopup}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SectorPopup;
