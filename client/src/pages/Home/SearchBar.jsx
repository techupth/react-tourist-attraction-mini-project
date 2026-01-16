function SearchBar(props) {
  return (
    <div className="flex flex-col gap-2 w-3/5">
      <label htmlFor="search-bar">ค้นหาที่เที่ยว</label>
      <input
        id="search-bar"
        ref={props.ref}
        onChange={props.onChange}
        placeholder="หาที่เที่ยวแล้วไปกัน"
        className="px-3 py-1 border border-gray-400 rounded-lg focus:outline-blue-400 placeholder:text-gray-400 placeholder:text-center"
      ></input>
    </div>
  );
}

export default SearchBar;
