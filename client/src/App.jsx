import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import DestinationList from "./components/DestinationList";
import { fetchTrips } from "./services/tripService";

function addTagToSearch(currentSearch, tag) {
  const keywords = currentSearch.trim().split(/\s+/).filter(Boolean);

  if (keywords.includes(tag)) {
    return keywords.join(" ");
  }

  return [...keywords, tag].join(" ");
}

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadTrips = useCallback(async (keywords) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchTrips(keywords);
      setDestinations(data);
    } catch (err) {
      setError(err.message);
      setDestinations([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      loadTrips(searchValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchValue, loadTrips]);

  const handleSearch = (keywords) => {
    loadTrips(keywords);
  };

  const handleTagClick = (tag) => {
    setSearchValue((currentSearch) => addTagToSearch(currentSearch, tag));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        onSearch={handleSearch}
      />
      <main className="mx-auto max-w-content px-6 pb-16 pt-2">
        {error && (
          <p className="mb-4 text-center text-base text-red-500">{error}</p>
        )}
        <DestinationList
          destinations={destinations}
          isLoading={isLoading}
          onTagClick={handleTagClick}
        />
      </main>
    </div>
  );
}

export default App;
