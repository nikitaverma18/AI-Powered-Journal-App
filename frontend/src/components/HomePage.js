import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddEntryForm from './AddEntryForm';
import '../styles/HomePage.css';
import TextAnimation from './TextAnimation'; 



const HomePage = ({ onAdd }) => {
 const navigate = useNavigate(); 

 const backgroundStyle = {
  backgroundImage: 'url("/Emotion-bg.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  // backgroundColor:'#ffc107',
};


return (
    <div style={backgroundStyle}>
     <header className="header">
      <h1 className="heading">𝐀𝐈-𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐌𝐨𝐨𝐝 𝐉𝐨𝐮𝐫𝐧𝐚𝐥 🤖​:</h1>
      <div className="profile-icon">
        <img src="https://img.freepik.com/premium-photo/profile-icon-white-background_941097-162268.jpg" alt="Profile" />
      </div>
    </header>
    <TextAnimation /> { }
      {/* <h1>Welcome to AI Journal</h1>
      <h2>Add a new journal entry</h2> */}
      <AddEntryForm onAdd={onAdd} />
      <button onClick={() => navigate('/journal')}>View Entries</button>
    </div>
  );
};

export default HomePage;
