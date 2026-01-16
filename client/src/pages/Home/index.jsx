import { useState, useRef, useEffect } from "react";
import axios from "axios";
import PostList from "./PostList";
import SearchBar from "./SearchBar";

function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchQueryRef = useRef();
  const debounceTimerRef = useRef(null);

  useEffect(() => {
    getPosts();

    // Clear timer before component unmount
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

  const handleInputChange = (event) => {
    const value = event.target.value;

    // Clear timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Create new timer
    debounceTimerRef.current = setTimeout(() => {
      // Call after 500ms
      getPosts(value);
    }, 500);
  };

  const handleClickTag = (tag) => {
    const value = searchQueryRef.current.value;
    if (searchQueryRef.current.value.includes(tag)) return;

    if (value) {
      searchQueryRef.current.value += ` ${tag}`;
    } else {
      searchQueryRef.current.value = tag;
    }
    getPosts(searchQueryRef.current.value);
  };

  return (
    <main className="flex flex-col items-center gap-8 p-8">
      <h1 className="text-5xl text-blue-500">เที่ยวไหนดี</h1>
      <SearchBar ref={searchQueryRef} onChange={handleInputChange} />
      {isLoading ? (
        <span className="text-2xl">Loading...</span>
      ) : !posts.length ? (
        <span className="text-2xl">
          ไม่มีผลลัพท์สำหรับ "{searchQueryRef.current?.value ?? ""}"
        </span>
      ) : (
        <PostList posts={posts} handleClickTag={handleClickTag} />
      )}
    </main>
  );
}

export default Home;
