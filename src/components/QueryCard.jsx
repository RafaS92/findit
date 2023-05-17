import React from "react";

function QueryCard({ query, handleQueryDelete }) {
  return (
    <div className="query-container" key={query.id}>
      <div className="query-title">
        <h4>City:{query.City}</h4>
      </div>
      <div className="query-details">
        <p>
          <span>Latitude: </span>
          {query.Lat}
        </p>
        <p>
          <span>Longitude: </span>
          {query.Lng}
        </p>
        <p>
          <span>Date: </span> {query.DateOfSearch}
        </p>
      </div>
      <button
        className="delete-button"
        onClick={() => handleQueryDelete(query.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default QueryCard;
