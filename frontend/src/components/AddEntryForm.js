import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AddEntryForm.css';


const AddEntryForm = ({ onAdd }) => {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
        alert('please write something before adding an entry!');
     return;
    }
    onAdd(content); 
      setContent('');
      navigate('/journal'); 
  };

  return (
    <form onSubmit={handleSubmit} className="add-entry-form">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your journal entry..."
      />
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default AddEntryForm;
