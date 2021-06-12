import React, { useState } from 'react';

import SearchResult from './SearchResult';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = e => {

  };

  return (
    <>
      <h2>Search</h2>
      <div id="searchForm">
        <label>
          Search for musicians with whom to jam
          <form>
            <label for="instruments">Choose an instrument:
              <select id="instruments" name="instruments">
                <option value="vocals">Vocals</option>
                <option value="guitar">Guitar</option>
                <option value="bass">Bass</option>
                <option value="drum">Drums</option>
                <option value="piano">Piano</option>
                <option value="synth">Keyboard / Synth</option>
                <option value="drumMachine">Drum Machine</option>
                <option value="brass">Brass Instrument</option>
                <option value="string">String Instrument</option>
                <option value="percussion">Percussion</option>
              </select>
            </label>
            <label for="genre">Choose a genres:
              <select id="genre" name="genre">
                <option value="rock">Rock</option>
                <option value="punk">Punk</option>
                <option value="metal">Metal</option>
                <option value="hipHop">Hip-Hop</option>
                <option value="country">Country</option>
                <option value="soul">Soul</option>
                <option value="electronic">Electronic</option>
                <option value="pop">Pop</option>
                <option value="rnb">RnB / Neo-Soul</option>
                <option value="reggae">Reggaeton</option>
                <option value="folk">Folk</option>
              </select>
            </label>

            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button type="button" onClick={handleSearch}>Search</button>
          </form>
        </label>
      </div>
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
