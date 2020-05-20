import React from 'react';
import './song-entry.css';

export default function SongEntry({ song, selectSong, isRelated }){

    const [artist, title] = song.name.split(' - ');

    const styleVariables = {
        '--multi': isRelated ? 0.5 : 1
    };

    return (
        <div onClick={() => selectSong(song)} className="song-entry" style={styleVariables}>
            <img src="http://placekitten.com/300/200"></img>
            <section className="data">
                <span className="name">{title}</span>
                <div className="artist-container">
                    <span className="artist">{artist}</span>
                    {
                        !isRelated &&
                        <span className="views">{song.views} views</span>
                    }
                </div>
                {
                    !isRelated &&
                    <span className="description">
                        description...........
                    </span>
                }
            </section>
        </div>
    )
}