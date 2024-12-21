// src/pages/JournalPage.js
import React from 'react';
import '../styles/JournalPage.css';

const JournalPage = ({ entries, onDelete, onEdit }) => {
  return (
    <div className="journal-page">
      <h2>Your Journal Entries</h2>
      {entries.length === 0 ? (
        <p>No entries yet. Add one from the home page!</p>
      ) : (
        <div className="entries-container">
          {entries.map((entry, index) => (
            <div key={index} className="entry">
              <p>{entry.text}</p>
              <span>{new Date(entry.timestamp).toLocaleString()}</span>
              <div>
                <button onClick={() => onEdit(index)}>Edit</button>
                <button onClick={() => onDelete(index)}>Delete</button>
              </div>
              <p>Mood: {entry.mood}</p> {/* Display the mood received from AI */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JournalPage;
