// src/components/Header.js
import React from 'react';
import '../styles/Header.css'; // Iska CSS separate file me rakhenge

const Header = () => {
  return (
    <header className="header">
      <h1 className="heading">AI Mood Tracker</h1>
      <div className="profile-icon">
        <img src="https://img.freepik.com/premium-photo/profile-icon-white-background_941097-162268.jpg" alt="Profile" />
      </div>
    </header>
  );
};

export default Header;
