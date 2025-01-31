import React from 'react';
import JournalEntry from './JournalEntry';
import '../styles/EntryList.css';

const EntryList = ({ entries, onDelete, onEdit }) => {
  return (
    <div className="entry-list">
      <table className="journal-table">
        <thead>
          <tr>
            <th>Content</th>
            <th>Sentiment</th>
            <th>Timestamp</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <JournalEntry
              key={entry._id}
              entry={entry}
              onDelete={onDelete}
              onEdit={onEdit} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EntryList;
