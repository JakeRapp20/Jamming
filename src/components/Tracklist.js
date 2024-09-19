import React from "react";
import Track from "./Track";

const Tracklist = ({ tracksSearched, onClick }) => {
  return (
    <>
      {tracksSearched.map((track) => {
        return (
          <>
            <Track track={track} keyId={track.id} onClick={onClick} />
          </>
        );
      })}
    </>
  );
};

export default Tracklist;
