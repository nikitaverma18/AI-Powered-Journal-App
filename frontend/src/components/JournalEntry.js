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
    if(!newContent.trim()){
      alert('Entry Cannot Be Empty!');
      return;
    }
    onEdit(entry._id, newContent);
    setIsEditing(false);
    alert('Edit Saved Successfully!');
  };

  const handleCancelEdit = () =>{
    setNewContent(entry.content);
    setIsEditing(false);
  }

  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this entry?');
    if(confirmDelete){
      onDelete(entry._id);
      alert('Enrty delete successfully!');
    }
  };

  return (
    <tr>
      {isEditing ? (
        <td colSpan="4">
          <textarea value={newContent} onChange={handleEditChange} placeholder="Edit your entry..." />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={handleCancelEdit} className='cancel-button'>Cancel</button>
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
            <button onClick={handleDelete} className="icon-button">
              <FaTrash />
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

export default JournalEntry;
