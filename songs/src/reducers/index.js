const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '2:30'},
        { title: 'Macarena', duration: '4:05'},
        { title: 'All Star', duration: '3:15'},
        { title: 'I Want it That Way', duration: '3:35'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};