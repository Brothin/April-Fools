import React, { useEffect } from "react";
import "./App.css";
import useSound from "use-sound";
import minions from "./minions.jpg";
import song from "./song.mp3";

function App() {
  const [playSound] = useSound(song);

  return (
    <div className="App">
      <h1 className="header">Happy April Fools' Day! 😜</h1>
      <img
        src={minions}
        alt="My Image"
        className="editImage"
        onClick={playSound}
      />
    </div>
  );
}

export default App;
