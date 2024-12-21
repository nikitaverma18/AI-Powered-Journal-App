import React from 'react';
import JournalEntry from './JournalEntry';
import '../styles/EntryList.css';

const EntryList = ({ entries, onDelete, onEdit }) => {
  return (
    <div className="entry-list">
      {entries.map((entry) => (
        <JournalEntry
          key={entry._id}
          entry={entry}
          onDelete={onDelete}
          onEdit={onEdit} 
        />
      ))}
    </div>
  );
};

export default EntryList;
