function SearchBar() {
  return (
    <div className="flex flex-col gap-2 w-3/5">
      <label htmlFor="search-bar">ค้นหาที่เที่ยว</label>
      <input
        id="search-bar"
        placeholder="หาที่เที่ยวแล้วไปกัน"
        className="border border-gray-400 rounded-lg placeholder:text-gray-400 placeholder:text-center"
      ></input>
    </div>
  );
}

export default SearchBar;
