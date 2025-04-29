// Alert.js
import React from 'react';
import { CheckCircle } from 'react-bootstrap-icons';
function Alert({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="custom-alert">
      <div className="d-flex align-items-center gap-2">
        <CheckCircle size={35} color="#28a745" />
        <span className="alert-text">Logged in successfully!</span>
      </div>
      <button type="button" className="btn-close ms-3 black" onClick={onClose}></button>
    </div>
  );
}

export default Alert;
