// src/pages/HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = ({ onAddEntry }) => {
  const [entryText, setEntryText] = useState('');
  const navigate = useNavigate();

  const handleAddEntry = () => {
    if (entryText.trim()) {
      onAddEntry(entryText); // Send the text for mood analysis
      setEntryText('');
      navigate('/journal'); // Navigate to JournalPage
    } else {
      alert('Please enter some text for your journal entry!');
    }
  };

  return (
    <div className="home-page">
      <h1>Welcome to Your Journal</h1>
      <textarea
        placeholder="Write your thoughts here..."
        value={entryText}
        onChange={(e) => setEntryText(e.target.value)}
      ></textarea>
      <button onClick={handleAddEntry}>Add Entry</button>
    </div>
  );
};

export default HomePage;
