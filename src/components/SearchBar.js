import React from "react";
import { searchSpotify } from "../module/search";

const SearchBar = ({ handleSearchChange, handleSpotifySearch }) => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Songs"
            aria-label="Search"
            onChange={handleSearchChange}
          />
          <button
            onClick={handleSpotifySearch}
            className="btn btn-outline-success my-2 my-sm-0"
          >
            Go!
          </button>
        </form>
      </nav>
    </>
  );
};

export default SearchBar;
