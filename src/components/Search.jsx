const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search by username"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border-black border"
    />
  );
};

export default Search;
