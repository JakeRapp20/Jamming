import React from 'react'

const Playlist = ( { selectedPlaylistTracks, onClick, submitPlayList }) => {

  return (
  <>
  <div className="input-group mb-3 bg-dark">
  <span className="input-group-text bg-dark text-white" id="basic-addon1">Playlist Name</span>
  <input type="text" className="form-control bg-dark text-white" placeholder="Playlist" aria-label="Username" aria-describedby="basic-addon1" />
  </div>
    <div className="container text-center">
    <div className="row align-items-start">
      <div className="col">
      <div className="card bg-dark text-white vh-200  justify-content-center align-items-center" >
      <div className="card-body" >
      {/* Take prop and map array into playlist list */}
      {selectedPlaylistTracks.map((tracks) => {
        return (
          <>
          <h4 className="card-title">{tracks.name}</h4>
          <p className="card-text">Artist: {tracks.artist}</p>
          <p className="card-text">Album: {tracks.album}</p>
          <button className="btn btn-primary" data-key={tracks.id} onClick={onClick} >Remove from Playlist</button>
          </>
        )
    })}
      </div>
      </div>
      </div>
      <button className="btn btn-primary" onClick={submitPlayList}>Save PlayList to Spotify</button>
    </div>
  </div>
  </>
  )
}

export default Playlist