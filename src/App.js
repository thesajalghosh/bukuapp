import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [times, setTimes] = useState(0)
  const speakText = () => {
    setTimes(times +1)
    if ('speechSynthesis' in window) {
      const message = new SpeechSynthesisUtterance("Debanjali, I love you");
      message.lang = 'en-US';
      window.speechSynthesis.speak(message);
    } else {
      alert("Speech Synthesis is not supported in your browser.");
    }
  };

  useEffect(()=>{
    speakText()
  }, [times])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Debanjali, I love you</h1>
        {/* <button onClick={speakText}>Click to Speak</button> */}
      </header>
    </div>
  );
}

export default App;
