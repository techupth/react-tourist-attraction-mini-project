import React, { useState } from "react";
import "../styles/SearchBar.css";

function SearchBar({ setSearch }) {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <p>ค้นหาที่เที่ยว</p>
      <div className="input-container">
        <input
          id="searchInput"
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
        />
      </div>
    </div>
  );
}

export default SearchBar;
