import React from "react";
import "../styles/BigPhotoModal.css";

function BigPhotoModal({ photoUrl, onClose }) {
  return (
    <div className="big-photo-container">
      <span className="close-btn" onClick={onClose}>
        &times;
      </span>
      <img src={photoUrl} alt="Big Trip Photo" />
    </div>
  );
}

export default BigPhotoModal;
