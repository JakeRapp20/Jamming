import React from "react";

const Track = ({ track, keyId, onClick }) => {
  return (
    <>
      <div className="container text-center ">
        <div className="row align-items-start">
          <div className="col">
            <div className="card bg-dark text-white vh-200  justify-content-center align-items-center">
              <div className="card-body" key={keyId}>
                <h4 className="card-title">{track.name}</h4>
                <p className="card-text">Artist: {track.artists[0].name}</p>
                <p className="card-text">Album: {track.album.name}</p>
                <button
                  className="btn btn-primary"
                  data-key={keyId}
                  onClick={onClick}
                >
                  Add to PlayList
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Track;
