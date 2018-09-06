var playlist = {artist: 'song'};


function updatePlaylist(playList, artistName, songTitle) {
  return Object.assign(playList, { [artistName]: songTitle})
}

