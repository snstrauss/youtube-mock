import React, { useContext, useMemo } from 'react';
import './search-results.css';
import SongsContext from '../../contexts/songs.context';
import SongEntry from '../song-entry/song-entry';

export default function SearchResults({ results, selectSong }){


    const { flatSongs } = useContext(SongsContext);

    const songsToShow = results ? results : flatSongs;

    const singleSongs = useMemo(() => {
        const singleSongsObj = songsToShow.reduce((acc, curr) => {
            acc[curr.link] = curr;
            return acc;
        }, {})


        return Object.values(singleSongsObj)
    }, [songsToShow]);

    return (
        <div className="search-results">
            {
                singleSongs.map((song, i) => (
                    <SongEntry song={song} key={song.link} selectSong={selectSong}/>
                ))
            }
        </div>
    )
}