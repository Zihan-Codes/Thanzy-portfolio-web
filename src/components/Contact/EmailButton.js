import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import './ContactButton.css'; 

const EmailButton = () => {
  const openEmailClient = () => {
    console.log("email button clicked");
    const email = 'sihanmfm.19@uom.lk';
    const subject = 'Inquiry from Portfolio';
    const body = 'Hello! I just checked your portfolio and...';

    const emailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(emailUrl, '_blank');
  };

  return (
    <div className="email-button" onClick={openEmailClient}>
      <FontAwesomeIcon icon={faEnvelope} />
    </div>
  );
};

export default EmailButton;
