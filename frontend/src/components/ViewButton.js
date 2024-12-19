// src/components/ViewButton.js
import React from 'react';
import '../styles/ViewButton.css';

const ViewButton = ({ onViewClick }) => {
  return (
    <button className="view-button" onClick={onViewClick}>
      View Entries
    </button>
  );
};

export default ViewButton;
