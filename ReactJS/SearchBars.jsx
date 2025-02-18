import React, { useState } from "react";

const SearchBars = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative max-w-lg mx-auto">
      <input
        type="text"
        className="w-full p-3 border rounded-lg pl-10 outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        onClick={() => onSearch(query)}
      >
        🔍
      </button>
    </div>
  );
};

export default SearchBars;
