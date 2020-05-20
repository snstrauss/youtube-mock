import React, { useEffect, useState } from 'react';
import Search from '../search/search';
import './youtube-search.css';
import SongsContext from '../../contexts/songs.context';
import SearchResults from '../search-results/search-results';
import SongView from '../song-view/song-view';
import { getSongId } from '../../services/song.service';

const songsHistory = [];
export default function YoutubeSearch(){

    const [allSongs, setSongs] = useState();
    const [selectedSong, setSelectedSong] = useState();
    const [foundSongs, setFoundSongs] = useState();

    useEffect(() => {
        fetch('/songs.json')
        .then(res => res.json())
        .then((songs) => {
            const flatSongs = getFlatSongs(songs);

            function getFlatSongs(songsArr){

                let songs = [];

                songsArr.forEach((song) => {
                    songs.push(song);

                    if(song.relatedPlaylists){
                        const relatedSongs = getFlatSongs(song.relatedPlaylists);
                        songs = songs.concat(relatedSongs);
                    }
                });

                return songs;
            }

            window.onpopstate = goBack;

            setSongs({
                songs,
                flatSongs
            });

            return () => {
                window.onpopstate = null;
            }
        })
    }, [])

    function goBack(){
        const nextSong = songsHistory.pop();
        setSelectedSong(nextSong);
    }

    function gotSongs(songs){
        setFoundSongs(songs);
    }

    function selectSong(song){
        if(selectedSong){
            songsHistory.push(selectedSong);
        }

        window.history.pushState(getSongId(song), song.name);
        setSelectedSong(song);
    }

    return (
        <div className="app-container">
            {
                allSongs
                ?
                <SongsContext.Provider value={allSongs}>
                    <header className="header">
                        <Search respond={gotSongs}/>
                    </header>
                    <main>
                        {
                            selectedSong
                            ?
                            <SongView song={selectedSong} selectSong={selectSong} />
                            :
                            <SearchResults results={foundSongs} selectSong={selectSong} />
                        }
                    </main>
                </SongsContext.Provider>
                :
                null
            }
        </div>
    )
}