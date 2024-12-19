// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import TextAnimation from '../components/TextAnimation';
import EntryBox from '../components/EntryBox';
import ViewButton from '../components/ViewButton';
import '../styles/HomePage.css';

const HomePage = ({ onAddEntry, onViewClick }) => {
  return (
    <div className="home-page">
      <Header />
      <TextAnimation />
      <EntryBox onAddEntry={onAddEntry} />
      <ViewButton onViewClick={onViewClick} />
    </div>
  );
};

export default HomePage;
