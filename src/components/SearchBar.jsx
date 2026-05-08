export default function SearchBar({
  searchTerm,
  setSearchTerm
}) {
  return (
    <s-search-field
      label="Search Products"
      value={searchTerm}
      onInput={(e) =>
        setSearchTerm(e.target.value)
      }
    >
    </s-search-field>
  );
}