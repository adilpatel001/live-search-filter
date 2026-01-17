export default function ResultItem({ name, query }) {
  if (!query) return null;

  const regex = new RegExp(`(${query})`, "gi");
  const parts = name.split(regex);

  return (
    <div className="item">
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <span key={index} className="highlight">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </div>
  );
}
