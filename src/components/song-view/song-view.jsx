import React from 'react';
import './song-view.css';
import SongEntry from '../song-entry/song-entry';
import { separateTitle, getSongId } from '../../services/song.service';



export default function SongView({ song, selectSong }){

    const songId = getSongId(song);
    // const [artist, title] = separateTitle(song);

    return (
        <div className="song-view">
            <div className="song-player">
                <h1>{song.name}</h1>
                <iframe width="1020" height="630" src={`https://www.youtube.com/embed/${songId}`}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                </iframe>
            </div>
            <aside className="related-songs">
                {
                    song.relatedPlaylists
                    ?
                    song.relatedPlaylists.map((song) => (
                        <SongEntry song={song} key={song.link} selectSong={selectSong} isRelated/>
                    ))
                    :
                    null
                }
            </aside>
        </div>
    )
}