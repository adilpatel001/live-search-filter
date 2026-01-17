export default function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search names..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-input"
    />
  );
}
