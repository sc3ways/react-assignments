import React from "react";
import { BiSearch } from "react-icons/bi";

function SearchBy({ query, setQuery }) {
  return (
    <div className="search-by-name position-relative">
      <button className="position-absolute d-flex justify-content-center align-items-center h-100">
        <BiSearch />
      </button>
      <input
        type="text"
        className="form-control px-5"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by country name"
      />
    </div>
  );
}

export default SearchBy;
