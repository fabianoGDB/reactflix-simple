import React from "react";

const Search = ({ searchItem, setSearchItem }) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search"></img>
        <input
          type="text"
          placeholder="search for your movie"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
