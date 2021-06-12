import React, { useState } from 'react';

import SearchResult from './SearchResult';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [instrument, setInstrument] = useState('vocals');
  const [genre, setGenre] = useState('rock');
  const [skill, setSkill] = useState('amateur');
  const [location, setLocation] = useState('');
  const [shouldExcludeMen, setShouldExcludeMen] = useState(false);

  const labelToSetState = {
    instruments: setInstrument,
    genre: setGenre,
    skill: setSkill,
    gender: setShouldExcludeMen,
    location: setLocation,
  };

  const handleChange = e => {
    e.preventDefault();
    const { name, target } = e.target.value;
    const updateState = labelToSetState[name];
    updateState(target);
  };

  const handleSearch = e => {
    e.preventDefault();

    const filters = {
      instrument,
      genre,
      skill,
      location,
      shouldExcludeMen,
    };

    //TODO: add query string to fetch, connect query to backend
    // fetch('/users')
    //   .then(res => res.json())
    //   .then(data => setSearchResults(data))
    //   .catch(err => console.log(err));
  };

  return (
    <>
      <h2>Search</h2>
      <div id="searchForm">
        <label>
          Search for musicians with whom to jam
          <form onSubmit={handleSearch}>
            <label for="instruments">Choose an instrument:
              <select
                id="instruments"
                name="instruments"
                onChange={handleChange}
              >
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
            </label><br/>
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
            </label><br/>
            <label for="skill">Skill level:
              <select id="skill" name="skill">
                <option value="amateur">Amateur</option>
                <option value="professional">Professional</option>
              </select>
            </label><br/>
            <label>Location:
              <input type="text" name="location" placeholder="NYC, LA, Outer space" />
            </label><br/>
            <label>Only show non-men
              <input type="checkbox" id="gender" name="gender" />
            </label><br/>
            <input type="submit" value="Search" />
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
