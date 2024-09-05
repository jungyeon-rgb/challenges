const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search by username"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border-gray-300 border p-2"
    />
  );
};

export default Search;
