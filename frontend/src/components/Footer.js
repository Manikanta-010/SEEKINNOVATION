import React from 'react';
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="/images/image1.jpg" alt="Footer Image" className="footer-image" />
          </div>
          <div className="col-md-6">
            <h2 className="footer-title">Why Seek Innovation?</h2>
            <p className="footer-description">Trusted by more than 120k....</p><br/><br/>
            <ul className="footer-points">
              <li>End-to-end business-driven innovation.</li>
              <li>Foster innovation culture across all business units.</li>
              <li>Deploy within 2 weeks with dedicated innovation experts.</li>
              <li>Scale effortlessly with an enterprise-grade platform.</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;