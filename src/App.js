import React, { useState } from 'react';
import './App.css';
import TrackList from './components/Tracklist';
import 'bootstrap/dist/css/bootstrap.css'
import Playlist from './components/Playlist';

const trackList = [ { id: 0, name: 'Sweet Child of Mine', artist: 'Gun\'s and Roses', album: 'First Ablum', uri: '60SdxE8apGAxMiRrpbmLY0' }, { id: 1, name: 'Thunder Struck', artist: 'AC/DC', album: 'First Album', uri: '40YcuQysJ0KlGQTeGUosTC' }];

function App() {

  const [trackListSelected, setTrackListSelected ] = useState([]);

  const handleAddToPlaylist = (event) => {
    // retrieve button data from Track component to find trackindex to add to trackListSelected
    const keyId = event.target.getAttribute('data-key');
    const selectedTrack = trackList.find(track => track.id === parseInt(keyId) );
    if (trackListSelected.find(selectedTrack => selectedTrack.id === parseInt(keyId)))
    console.log('Track Already exists')
    else setTrackListSelected(prev => [selectedTrack, ...prev]);
  }
  
  const handleRemoveFromPlayList = (event) => {
    const keyId = event.target.getAttribute('data-key');
    const leftOverTracks = trackListSelected.filter(track => track.id !== parseInt(keyId));
    setTrackListSelected( l => l.filter(track => track.id !== parseInt(keyId)));
    
  }

  const submitPlayList = () => {
    console.log('Submitted')
    setTrackListSelected([])
  }


  return (
    <>
    <div className="bg-black text-white vh-200 justify-content-center align-items-center">
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <h1>Songs</h1>
          <TrackList trackList={trackList} onClick={handleAddToPlaylist} />
        </div>
        <div className="col">
          <h1>Playlist</h1>
          <Playlist selectedPlaylistTracks={trackListSelected} onClick={handleRemoveFromPlayList} submitPlayList={submitPlayList}/>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
