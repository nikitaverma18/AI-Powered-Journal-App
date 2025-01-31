import React, { useEffect, useState } from 'react';
import '../styles/TextAnimation.css';

const TextAnimation = () => {
  const [text, setText] = useState(''); 
  const phrase = '𝐓𝐫𝐚𝐜𝐤📈​, 𝐀𝐧𝐚𝐥𝐲𝐳𝐞🥲​, 𝐚𝐧𝐝 𝐈𝐦𝐩𝐫𝐨𝐯𝐞😂​';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {

      setText((prevText) => phrase.slice(0, index + 1));
      index++;
      if (index === phrase.length) {
        clearInterval(interval); 
      }
    }, 150);

    return () => clearInterval(interval); 
  }, []);

  return <p className="animated-text">{text}</p>;
};

export default TextAnimation;
