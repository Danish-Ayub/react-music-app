import React from "react";
import { v4 as uuidv4 } from 'uuid';

// Components
import LibrarySong from "./LibrarySong";

const Library = ({ songs }) => {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song =>
                    <LibrarySong
                        song={song}
                        key={uuidv4()} />
                )}
            </div>
        </div>
    )
}

export default Library;