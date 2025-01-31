import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; 
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
    <tr>
      {isEditing ? (
        <td colSpan="4">
          <textarea value={newContent} onChange={handleEditChange} placeholder="Edit your entry..." />
          <button onClick={handleSaveEdit}>Save</button>
        </td>
      ) : (
        <>
          <td>{entry.content}</td>
          <td className={`sentiment ${entry.sentiment.toLowerCase()}`}>{entry.sentiment}</td>
          <td>{new Date(entry.timestamp).toLocaleString()}</td>
          <td>
            <button onClick={() => setIsEditing(true)} className="icon-button">
              <FaEdit />
            </button>
            <button onClick={() => onDelete(entry._id)} className="icon-button">
              <FaTrash />
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

export default JournalEntry;
