import React, { useState, useRef } from "react";
// Styles
import "./styles/app.scss"
// Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
// Util
import data from "./data";

function App() {
  // Ref
  const audioRef = useRef(null);
  // States
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercantage: 0,
  });
  // Functions
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    // Calculate Pecantage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercantage: animation
    });
  };

  return (
    <div className="App">
      <Nav
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <Song
        currentSong={currentSong}
      />
      <Player
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        libraryStatus={libraryStatus}
        audioRef={audioRef}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}>
      </audio>
    </div>
  );
}

export default App;
