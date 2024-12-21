
import React, { useEffect } from 'react';
import EntryList from './EntryList';
// import '../styles/JournalPage.css';

const JournalPage = ({ journals, onDelete, onEdit }) => {
  useEffect(() => {
    console.log('Journals updated:', journals);
  }, [journals]);

  return (
    <div>
      <h1>"𝐘𝐨𝐮𝐫 𝐉𝐨𝐮𝐫𝐧𝐚𝐥 𝐄𝐧𝐭𝐫𝐢𝐞𝐬🤖​📱"...​</h1>
      <EntryList entries={journals} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
};

export default JournalPage;
