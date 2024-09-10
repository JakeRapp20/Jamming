import React from 'react'
import Track from './Track';

const Tracklist = ({ trackList, onClick }) => {

  return (
    <>
        {trackList.map((track) => {
          return (
            <>
            <Track track={track} keyId={track.id} onClick={onClick}/> 
            </>
          )
        })}
    </>
  )
}

export default Tracklist