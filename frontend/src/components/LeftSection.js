import React from 'react';
import './styles/LeftSection.css';

const LeftSection = ({ imageSrc }) => {
  return (
    
    <div className="left-section">
      <img src={imageSrc} alt="Left Section" className="left-section-image" />
    </div>
  );
};

export default LeftSection;
