import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar.jsx";
import TripList from "../components/TripList.jsx";
import "../styles/HomePage.css";

function HomePage() {
  const [trips, setTrips] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchTrips();
  }, [search]);

  const fetchTrips = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${search}`
      );
      setTrips(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="home-page">
      <h1>เที่ยวไหนดี</h1>
      <SearchBar setSearch={setSearch} />
      <TripList trips={trips} />
    </div>
  );
}

export default HomePage;
