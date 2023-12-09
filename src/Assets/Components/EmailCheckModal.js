import React from 'react';
import './EmailCheckModal.css'

const EmailCheckModal = ({ closeModal }) => {
  return (
    <div className="EmailCheckModal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <p>Please check your email for the OTP.</p>
      </div>
    </div>
  );
};

export default EmailCheckModal;
