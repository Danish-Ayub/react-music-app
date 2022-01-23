import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({ song, songs, setSongs, setCurrentSong, id, audioRef, isPlaying }) => {
    // Functions
    const songSelectHandler = () => {
        setCurrentSong(song);
        // Add active state
        const selectedSong = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(selectedSong);
        // Check if the song is playing
        playAudio(audioRef, isPlaying);
    };

    return (
        <div
            onClick={songSelectHandler}
            className={`library-song ${song.active ? 'selected' : ''}`}>
            <img src={song.cover} alt={song.name}></img>
            <div className="songs-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;