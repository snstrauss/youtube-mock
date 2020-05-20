import React from 'react';
import './song-view.css';
import SongEntry from '../song-entry/song-entry';

export default function SongView({ song, selectSong }){

    return (
        <div className="song-view">
            <div className="song-player">
                player
            </div>
            <aside className="related-songs">
                related:
                {
                    song.relatedPlaylists
                    ?
                    song.relatedPlaylists.map((song) => (
                        <SongEntry song={song} key={song.link} selectSong={selectSong}/>
                    ))
                    :
                    null
                }
            </aside>
        </div>
    )
}