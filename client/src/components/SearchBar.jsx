function SearchBar({ value, onChange, onSearch }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch?.(value);
    }
  };

  return (
    <div className="w-full">
      <label
        className="mb-2 block text-left text-base text-gray-700"
        htmlFor="search-input"
      >
        ค้นหาที่เที่ยว
      </label>
      <input
        id="search-input"
        className="w-full border-0 border-b-2 border-gray-300 bg-transparent py-2 text-center text-base text-gray-800 outline-none transition-colors placeholder:text-center placeholder:text-gray-400 focus:border-primary"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="หาที่เที่ยวแล้วไปกัน ..."
      />
    </div>
  );
}

export default SearchBar;
