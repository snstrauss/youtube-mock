export function separateTitle(song){
    return song.name.split(' - ');
}

export function getSongId(song){
    return song.link.match(/watch\?v=(.+)/)[1];
}

export default {
    separateTitle,
    getSongId
}