import React, { useEffect, useState } from "react";
import "./App.css";
import TrackList from "./components/Tracklist";
import "bootstrap/dist/css/bootstrap.css";
import Playlist from "./components/Playlist";
import SearchBar from "./components/SearchBar";
import { getSpotifyToken, loginSpotify } from "./module/login";
import { searchSpotify } from "./module/search";
import { getUserId } from "./module/getUserId";
import { createPlaylist, submitSongs } from "./module/submitPlaylist";

function App() {
  const [trackListSelected, setTrackListSelected] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [songString, setSongString] = useState("");
  const [tracksSearched, setTracksSearched] = useState([]);
  const [playlistName, setPlaylistName] = useState("");

  const handleAddToPlaylist = (event) => {
    // retrieve button data from Track component to find trackindex to add to trackListSelected
    const keyId = event.target.getAttribute("data-key");
    const selectedTrack = tracksSearched
      .flat()
      .find((track) => track.id === keyId);
    if (trackListSelected.find((selectedTrack) => selectedTrack.id === keyId))
      console.log("Track Already exists");
    else setTrackListSelected((prev) => [selectedTrack, ...prev]);
  };

  const handleRemoveFromPlayList = (event) => {
    const keyId = event.target.getAttribute("data-key");
    setTrackListSelected((l) => l.filter((track) => track.id !== keyId));
  };

  const handleSearchChange = (e) => {
    const track = e.target.value;
    setSongString(track);
  };

  const handleSpotifySearch = async () => {
    const token = getSpotifyToken();
    const data = await searchSpotify(songString, token);
    setTracksSearched(data.tracks.items);
  };

  const handlePlaylistChange = (e) => {
    setPlaylistName(e.target.value);
  };

  const submitPlayList = async () => {
    const userId = await getUserId();
    const token = getSpotifyToken();
    const playlistResponse = await createPlaylist(playlistName, userId, token);
    const playlistId = playlistResponse.id;
    const songsToSubmit = trackListSelected.map((song) => song.id);
    submitSongs(songsToSubmit, playlistId, token);
    setTrackListSelected([]);
  };

  useEffect(() => {
    // checking if user is logged in
    if (!loggedIn) {
      const loginStatus = getSpotifyToken();
      if (loginStatus !== null) setLoggedIn(true);
    }
  });

  return (
    <>
      {loggedIn === false ? (
        <button className="btn btn-primary" onClick={loginSpotify}>
          Login Spotify
        </button>
      ) : (
        <SearchBar
          handleSearchChange={handleSearchChange}
          handleSpotifySearch={handleSpotifySearch}
        />
      )}
      <div className="bg-black text-white vh-200 justify-content-center align-items-center">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <h1>Songs</h1>
              <TrackList
                tracksSearched={tracksSearched}
                onClick={handleAddToPlaylist}
              />
            </div>
            <div className="col">
              <h1>Playlist</h1>
              <Playlist
                selectedPlaylistTracks={trackListSelected}
                onClick={handleRemoveFromPlayList}
                submitPlayList={submitPlayList}
                handlePlaylistChange={handlePlaylistChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
