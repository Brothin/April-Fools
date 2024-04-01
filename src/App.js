import React, { useEffect } from "react";
import "./App.css"; // Import any styles you need
import minions from "./minions.jpg"; // Import the image file
import song from "./song.mp3"; // Import the song file

function App() {
  useEffect(() => {
    // Function to play the audio
    const playAudio = () => {
      const audio = new Audio(song);
      audio.loop = true;
      audio.play();
    };

    // Play the audio after a short delay to ensure user interaction
    const delay = setTimeout(playAudio, 100);

    // Clean up the timeout
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="App">
      <h1 className="header">Happy April Fools' Day! 😜</h1>
      <img src={minions} alt="My Image" className="editImage" />
    </div>
  );
}

export default App;
