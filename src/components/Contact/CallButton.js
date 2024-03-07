import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Replace with a suitable icon from free-brands-svg-icons if available
import './ContactButton.css'; // Create this CSS file for styling

const CallButton = () => {
  const initiateCall = () => {
    console.log("call button clicked");
    const phoneNumber = '+94768968886'; // Replace with your phone number

    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, '_self');
  };

  return (
    <div className="call-button" onClick={initiateCall}>
      <FontAwesomeIcon icon={faPhone} /> {/* Replace with your chosen icon */}
    </div>
  );
};

export default CallButton;
