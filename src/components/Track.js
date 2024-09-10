import React from 'react'

const Track = ({ track, keyId, onClick }) => {


  return (
    <>

      <div className ="container text-center">
        <div className="row align-items-start">
          <div className="col">
          <div className="card" >
          <div className="card-body" key={keyId}>
          <h4 className="card-title">{track.name}</h4>
          <p className="card-text">Artist: {track.artist}</p>
          <p className="card-text">Album: {track.album}</p>
          <a className="btn btn-primary" data-key={keyId} onClick={onClick}>Add to PlayList</a>
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Track