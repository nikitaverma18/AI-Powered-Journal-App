// src/App.js
import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import JournalPage from './pages/JournalPage';
import axios from 'axios';

const App = () => {
  const [entries, setEntries] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Fetch entries when page loads
    axios.get('http://localhost:5000/api/entries')
      .then(response => {
        setEntries(response.data);
      })
      .catch(error => {
        console.error('Error fetching entries:', error);
      });
  }, []);

  const addEntry = async (entryText) => {
    try {
      const response = await axios.post('http://localhost:5000/api/entries/add', { text: entryText });
      setEntries([...entries, response.data]);
      setCurrentPage('journal');
    } catch (error) {
      console.error('Error adding entry:', error);
    }
  };

  const deleteEntry = async (index) => {
    const entryId = entries[index]._id;
    try {
      await axios.delete(`http://localhost:5000/api/entries/${entryId}`);
      setEntries(entries.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  const editEntry = async (index) => {
    const newText = prompt('Edit your entry:', entries[index].text);
    if (newText) {
      const entryId = entries[index]._id;
      try {
        const response = await axios.put(`http://localhost:5000/api/entries/${entryId}`, { text: newText });
        const updatedEntries = [...entries];
        updatedEntries[index] = response.data;
        setEntries(updatedEntries);
      } catch (error) {
        console.error('Error editing entry:', error);
      }
    }
  };

  return (
    <div>
      {currentPage === 'home' ? (
        <HomePage
          onAddEntry={addEntry}
          onViewClick={() => setCurrentPage('journal')}
        />
      ) : (
        <JournalPage
          entries={entries}
          onDelete={deleteEntry}
          onEdit={editEntry}
        />
      )}
    </div>
  );
};

export default App;
