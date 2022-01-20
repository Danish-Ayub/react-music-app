import React, { useState } from "react";
// Styles
import "./styles/app.scss"
// Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
// Util
import data from "./util";

function App() {
  // States
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song
        currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying} />
      <Library songs={songs} />
    </div>
  );
}

export default App;
