import React from "react";
import TripCard from "./TripCard.jsx";
import "../styles/TripList.css";

function TripList({ trips }) {
  return (
    <div className="trip-list">
      {trips.map((trip) => (
        <TripCard key={trip.eid} trip={trip} />
      ))}
    </div>
  );
}

export default TripList;
