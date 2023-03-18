import React, { useState } from 'react';
import './App.css';

const rhymeWithGypsy = [
  'whiskey',
  'tipsy',
  'frisky',
  'risque',
  'crispy',
  // ... (add more words here)
];

const rhymeWithMambo = [
  'rambo',
  'jumbo',
  'combo',
  'limbo',
  // ... (add more words here)
];

function getRandomRhyme(words) {
  return words[Math.floor(Math.random() * words.length)];
}

function RhymingSongNameGenerator() {
  const [songName, setSongName] = useState('G***y Mambo');

  const generateNewSongName = () => {
    const rhymingGypsy = getRandomRhyme(rhymeWithGypsy);
    const rhymingMambo = getRandomRhyme(rhymeWithMambo);
    setSongName(`${rhymingGypsy} ${rhymingMambo}`);
  };

  return (
    <div>
      <h1>Do the mambo!</h1>
      <p>{songName}</p>
      <button onClick={generateNewSongName}>Go!</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RhymingSongNameGenerator />
      </header>
    </div>
  );
}

export default App;
