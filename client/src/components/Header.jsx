import SearchBar from "./SearchBar";

function Header({ searchValue, onSearchChange, onSearch }) {
  return (
    <header className="pb-10 pt-12">
      <h1 className="mb-10 text-center text-5xl font-semibold tracking-wide text-primary">
        เที่ยวไหนดี
      </h1>
      <div className="mx-auto max-w-content px-6">
        <SearchBar
          value={searchValue}
          onChange={onSearchChange}
          onSearch={onSearch}
        />
      </div>
    </header>
  );
}

export default Header;
