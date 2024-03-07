// WhatsAppButton.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './ContactButton.css'; // Create this file for styling

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    // Replace '1234567890' with the actual phone number
    console.log("whatsap called")
    const phoneNumber = '+94768968886';
    const message = 'Hello! Dr Thanzeeha... I just checked your portfolio.'; // Optional initial message

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={openWhatsApp}>
      <FontAwesomeIcon icon={faWhatsapp} />
    </div>
  );
};

export default WhatsAppButton;
