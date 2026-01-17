import ResultItem from "./ResultItem";

export default function ResultList({ users, query }) {
  return (
    <div className="list">
      {users.map((user, index) => (
        <ResultItem key={index} name={user} query={query} />
      ))}
    </div>
  );
}
