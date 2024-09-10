import React from 'react'

const Playlist = ( { selectedPlaylistTracks }) => {

  return (
    <div className="container text-center">
    <div className="row align-items-start">
      <div className="col">
      <div className="card" >
      <div className="card-body" >
      {/* Take prop and map array into playlist list */}
      {selectedPlaylistTracks.map((tracks) => {
        return (
          <>
          <h4 className="card-title">{tracks.name}</h4>
          <p className="card-text">Artist: {tracks.artist}</p>
          <p className="card-text">Album: {tracks.album}</p>
          </>
        )
    })}
      </div>
      </div>
      </div>
    </div>
    <a href="#" className="btn btn-primary">Add to PlayList</a>
  </div>
  )
}

export default Playlist