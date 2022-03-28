import React from "react";

function Search() {
  return (
    <div>
      <form id="find-city-form">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a city (e.g. San Francisco)"
            id="find-input"
          />
          <button className="btn btn-outline-warning" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
      <p id="current-location" className="mt-4 text-center">
        Use my current location
      </p>
    </div>
  );
}

export default Search;
