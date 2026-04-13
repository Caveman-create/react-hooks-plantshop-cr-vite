function SearchBar({ search, setSearch }) {
return (
<div className="search-wrapper">
<input
className="search-input"
type="text"
placeholder="Type a name to search..."
value={search}
onChange={(e) => setSearch(e.target.value)}
/>
</div>
);
}

export default SearchBar;
