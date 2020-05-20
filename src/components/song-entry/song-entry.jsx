import React from 'react';
import './song-entry.css';

export default function SongEntry({ song, selectSong }){

    return (
        <div onClick={() => selectSong(song)}>
            song:
            {song.name}
        </div>
    )
}