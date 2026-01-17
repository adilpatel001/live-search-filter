import { useEffect, useState } from "react";
import users from "./data";
import SearchInput from "./components/SearchInput";
import ResultList from "./components/ResultList";
import "./App.css";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredUsers([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    const timer = setTimeout(() => {
      const result = users.filter((user) =>
        user.toLowerCase().includes(searchText.toLowerCase())
      );

      setFilteredUsers(result);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [searchText]);

  return (
    <div className="app">
      <h1>🔍 Live Search</h1>

      <SearchInput value={searchText} onChange={setSearchText} />

      {loading && <p className="status">Searching...</p>}

      {!loading && searchText && filteredUsers.length === 0 && (
        <p className="status">No results found ❌</p>
      )}

      <ResultList users={filteredUsers} query={searchText} />
    </div>
  );
}
