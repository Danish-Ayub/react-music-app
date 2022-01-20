import React from "react";

const LibrarySong = ({ song }) => {
    return (
        <div className="library-song">
            <img src={song.cover} alt={song.name}></img>
            <h2>{song.name}</h2>
            <h3>{song.artist}</h3>
        </div>
    )
}

export default LibrarySong;