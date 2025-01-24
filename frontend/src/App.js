
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import JournalPage from './components/JournalPage';
import { getJournals, addJournal, deleteJournal, editJournal } from './services/journalService';
import './App.css';


const App = () => {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    const fetchJournals = async () => {
      const fetchedJournals = await getJournals();
      setJournals(fetchedJournals);
    };
    fetchJournals();
  }, []);

  //  add a journal entry
  const handleAddJournal = async (content) => {
    const newJournal = await addJournal(content);
    if (newJournal) {
      setJournals([...journals, newJournal]); 
    }
  };

  //  delete a journal entry
  const handleDeleteJournal = async (id) => {
    await deleteJournal(id);
    setJournals(journals.filter((journal) => journal._id !== id));
  };

  //  edit a journal entry
  const handleEditJournal = async (id, content) => {
    const updatedJournal = await editJournal(id, content);
    if (updatedJournal) {
      setJournals(
        journals.map((journal) =>
          journal._id === id ? updatedJournal : journal
        )
      );
    }
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage onAdd={handleAddJournal} />}
        />
        <Route
          path="/journal"
          element={
            <JournalPage
              journals={journals}
              onDelete={handleDeleteJournal}
              onEdit={handleEditJournal}
            />
          }
        />
      </Routes>
    </Router>
  );
};
export default App;
