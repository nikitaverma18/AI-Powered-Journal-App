// src/components/TextAnimation.js
import React, { useEffect, useState } from 'react';
import '../styles/TextAnimation.css';

const TextAnimation = () => {
  const [text, setText] = useState(''); // Start with an empty string
  const phrase = 'Your Mood Tracker';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      // Add characters only up to the length of the phrase
      setText((prevText) => phrase.slice(0, index + 1));
      index++;
      if (index === phrase.length) {
        clearInterval(interval); // Stop the interval once all characters are added
      }
    }, 150);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return <p className="animated-text">{text}</p>;
};

export default TextAnimation;
