import React, { useState } from 'react';
import '../styles/JournalEntry.css';


const JournalEntry = ({ entry, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(entry.content);

  const handleEditChange = (e) => {
    setNewContent(e.target.value);
  };

  const handleSaveEdit = () => {
    onEdit(entry._id, newContent);
    setIsEditing(false);
  };

  return (
    <div className="journal-entry">
      {isEditing ? (
        <div>
          <textarea
            value={newContent}
            onChange={handleEditChange}
            placeholder="Edit your entry..."
          />
          <button onClick={handleSaveEdit}>Save</button>
        </div>
      ) : (
        <div>
          <p>𝕮𝖔𝖓𝖙𝖊𝖓𝖙✍: {entry.content}</p>
          <span className={`sentiment ${entry.sentiment.toLowerCase()}`}>
          ✌𝓼𝓮𝓷𝓽𝓲𝓶𝓮𝓷𝓽✌:  {entry.sentiment}
          </span>
          <p className="timestamp">TIMESTAMP: {new Date(entry. timestamp).toLocaleString()}</p> {/* Display timestamp */}
          <div className='journal-entry-buttons'>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(entry._id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JournalEntry;
