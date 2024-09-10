import React, { useState } from 'react';
import './App.css';
import TrackList from './components/Tracklist';
import 'bootstrap/dist/css/bootstrap.css'
import Playlist from './components/Playlist';

const trackList = [ { id: 0, name: 'Sweet Child of Mine', artist: 'Gun\'s and Roses', album: 'First Ablum' }, { id: 1, name: 'Thunder Struck', artist: 'AC/DC', album: 'First Album' }];

function App() {

  const [trackListSelected, setTrackListSelected ] = useState([]);

  const handleAddToPlaylist = (event) => {
    // retrieve anchore data from Track component to find trackindex to add to trackListSelected
    const keyId = event.target.getAttribute('data-key');
    const selectedTrack = trackList.find(track => track.id === parseInt(keyId));
    setTrackListSelected(prev => [selectedTrack, ...prev]);
  }

  return (
    <>
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <h1>Songs</h1>
          <TrackList trackList={trackList} onClick={handleAddToPlaylist} />
        </div>
        <div className="col">
          <h1>Playlist</h1>
          <Playlist selectedPlaylistTracks={trackListSelected} />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
