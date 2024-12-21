// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import JournalPage from './pages/JournalPage';
// import './App.css'; // Global styles

// const App = () => {
//   const [entries, setEntries] = useState([]);
//   const [currentPage, setCurrentPage] = useState('home');

//   const addEntry = async (entryText) => {
//     try {
//       const sentiment = await getSentiment(entryText); // API call to analyze sentiment
//       const newEntry = {
//         text: entryText,
//         timestamp: new Date(),
//         mood: sentiment, // Received sentiment from AI API
//       };
//       setEntries((prevEntries) => [...prevEntries, newEntry]);
//       setCurrentPage('journal');
//     } catch (error) {
//       console.error('Error adding entry:', error);
//     }
//   };

//   const getSentiment = async (text) => {
//     try {
//       const response = await fetch('http://localhost:5000/analyzeSentiment', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ text }),
//       });

//       const data = await response.json();
//       return data.sentiment;
//     } catch (error) {
//       console.error('Error fetching sentiment:', error);
//       return 'Unknown'; // Default value
//     }
//   };

//   const deleteEntry = (index) => {
//     setEntries((prevEntries) =>
//       prevEntries.filter((_, i) => i !== index)
//     );
//   };

//   const editEntry = async (index) => {
//     const updatedText = prompt('Edit your entry:', entries[index].text);
//     if (updatedText) {
//       try {
//         const updatedMood = await getSentiment(updatedText); // Analyze sentiment for the updated text
//         setEntries((prevEntries) =>
//           prevEntries.map((entry, i) =>
//             i === index ? { ...entry, text: updatedText, mood: updatedMood } : entry
//           )
//         );
//       } catch (error) {
//         console.error('Error analyzing sentiment after edit:', error);
//       }
//     }
//   };
  
//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//           <Route
//             path="/"
//             element={<HomePage onAddEntry={addEntry} />}
//           />
//           <Route
//             path="/journal"
//             element={
//               <JournalPage
//                 entries={entries}
//                 onDelete={deleteEntry}
//                 onEdit={editEntry}
//               />
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



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