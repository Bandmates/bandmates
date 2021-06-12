import React, { useState } from 'react';

import SearchResult from './SearchResult';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <h2>Search</h2>
      {searchResults.length ? 
        searchResults.map((result, i) => (
          <SearchResult
            key={`searchResult${i}`}
            user={result}
          />
        ))
      : (
        <div>
          No users found who match your search. Bummer!
        </div>
      )}
    </>
  )
};

export default Search;
