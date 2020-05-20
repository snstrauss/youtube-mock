import React, { useState, useMemo, useContext } from 'react';
import SongsContext from '../../contexts/songs.context';

export default function Search({ respond }){

    const [searchValue, setSearchValue] = useState();

    const { flatSongs } = useContext(SongsContext);

    function doSearch(ev){
        ev.preventDefault();

        const foundSongs = flatSongs.filter(song => song.name.toLowerCase().includes(searchValue));

        respond(foundSongs);
    }

    return (
        <form onSubmit={(ev) => doSearch(ev)}>
            <input type="text" placeholder="search for videos" onChange={(ev) => setSearchValue(ev.target.value)}/>
            <button onClick={doSearch}>GO</button>
        </form>
    );
}