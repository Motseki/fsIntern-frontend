import React, { useEffect } from 'react';
import './SuccessModal.css';

function SuccessModal({ message, onClose }) {
  // Automatically close the modal after 5 seconds
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 3000);

    // Clear the timeout when the component unmounts or onClose is triggered manually
    return () => clearTimeout(timeoutId);
  }, [onClose]);

  return (
    <div className="error_modal">
      <div className="modalContent">
        <span className="close" onClick={onClose}>&times;</span>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default SuccessModal;
