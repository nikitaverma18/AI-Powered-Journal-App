// src/pages/JournalPage.js
import React from 'react';
import '../styles/JournalPage.css';
import axios from 'axios';

const JournalPage = ({ entries, onDelete, onEdit }) => {
  return (
    <div className="journal-page">
      <h2>Your Journal Entries</h2>
      <div className="entries-container">
        {entries.length === 0 ? (
          <p>No entries yet. Add one from the home page!</p>
        ) : (
          entries.map((entry, index) => (
            <div key={index} className="entry">
              <div className="entry-content">
                <p>{entry.text}</p>
                <span className="timestamp">
                  {new Date(entry.timestamp).toLocaleString()}
                </span>
              </div>
              <div className="entry-actions">
                <button onClick={() => onEdit(index)}>Edit</button>
                <button onClick={() => onDelete(index)}>Delete</button>
              </div>
              <div className="mood-label">
                Mood: <span>{entry.mood}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default JournalPage;
