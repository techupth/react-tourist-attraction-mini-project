import PostList from "./PostList";
import SearchBar from "./SearchBar";

function Home() {
  return (
      <main className="flex flex-col items-center gap-8 p-8">
        <h1 className="text-5xl text-blue-500">เที่ยวไหนดี</h1>
        <SearchBar />
        <PostList />
      </main>
  );
}

export default Home;
