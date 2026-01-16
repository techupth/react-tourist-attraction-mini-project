import { useState, useRef, useEffect } from "react";
import axios from "axios";
import PostList from "./PostList";
import SearchBar from "./SearchBar";

function Home() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const debounceTimerRef = useRef(null);

  useEffect(() => {
    // Clear timer before component unmount
    getPosts();

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  const getPosts = async (keywords = "") => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:4001/trips?keywords=${keywords}`
      );
      setPosts(response.data.data);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    // Clear timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Create new timer
    debounceTimerRef.current = setTimeout(() => {
      // Call after 500ms
      getPosts(searchQuery);
    }, 500);
  };

  return (
    <main className="flex flex-col items-center gap-8 p-8">
      <h1 className="text-5xl text-blue-500">เที่ยวไหนดี</h1>
      <SearchBar value={searchQuery} onChange={handleInputChange} />
      {isLoading ? (
        <span className="text-2xl">Loading...</span>
      ) : (
        <PostList posts={posts} />
      )}
    </main>
  );
}

export default Home;
