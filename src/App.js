import React, { useEffect } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import './App.css';

function App() {
  const { speak, voices } = useSpeechSynthesis();

  useEffect(() => {
    // Find the appropriate voice (optional)
    const voice = voices.find(v => v.lang === 'en-US');
    
    // Speak the text when the app is first loaded
    speak({ text: "Debanjali, I love you", voice });
  }, [speak, voices]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Debanjali, I love you</h1>
      </header>
    </div>
  );
}

export default App;
