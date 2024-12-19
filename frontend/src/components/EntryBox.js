// src/components/EntryBox.js
import React from 'react';
import '../styles/EntryBox.css';

const EntryBox = ({ onAddEntry }) => {
  const handleAddClick = () => {
    const entry = document.getElementById('entry-text').value;
    if (entry.trim()) {
      onAddEntry(entry);
      document.getElementById('entry-text').value = '';
    }else{
      alert('Please write somthing before adding!');
    }
  };

  return (
    <div className="entry-box">
      <textarea id="entry-text" placeholder="Write your thoughts here..." />
      <button onClick={handleAddClick}>Add Entry</button>
    </div>
  );
};

export default EntryBox;
