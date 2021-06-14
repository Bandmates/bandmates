import React, { useEffect, useState } from 'react';

import SearchResult from './SearchResult';
import NavBar from '../NavBar/NavBar';

/*

This is the "naive", or quickly done, version of the 
"search" component. An initial GET request is made 
for all users, then users are filtered based on some
criteria. In future iterations, it would be better
to actually query for users from the DB based on their
values. 
Additionally, when a user resets the form, the values
do not change, but the state does. This could be changed
by directly linking the state to the display values, or
possibly by learning more about Form's onReset. 

*/

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [instrument, setInstrument] = useState('vocals');
  const [genre, setGenre] = useState('rock');
  const [skill, setSkill] = useState('amateur');
  const [location, setLocation] = useState('');
  const [shouldExcludeMen, setShouldExcludeMen] = useState(false);
  const [initialResults, setInitialResults] = useState(null);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(({ users }) => {
        setInitialResults(users);
        setSearchResults(users);
      })
      .catch(err => console.log(err));
  }, []);

  const labelToSetState = {
    instruments: setInstrument,
    genre: setGenre,
    skill: setSkill,
    gender: setShouldExcludeMen,
    location: setLocation,
  };

  const handleChange = e => {
    e.preventDefault();
    let { name, value } = e.target;

    if (name === 'gender') value = !shouldExcludeMen;

    const updateState = labelToSetState[name];
    updateState(value);
  };

  const handleSearch = e => {
    e.preventDefault();

    const filteredResults = initialResults.filter(({
      instruments,
      skill_level: userSkillLevel,
      location: userLocation,
      gender: userGender,
      genres: userGenres,
    }) => {
      //TODO: filtering only sort of work; don't stress test in public! :,(
      //! Because no users currently have locations, we cannot search by location.

      if (shouldExcludeMen && userGender.toLowerCase() === 'man') {
        return false;
      }

      return instruments.toLowerCase() === instrument &&
        userGenres.toLowerCase() === genre &&
        userSkillLevel.toLowerCase() === skill;
        // && userLocation.toLowerCase().contains(location.toLowerCase)
    });

    setSearchResults(filteredResults);
  };

  const handleReset = e => {
    e.preventDefault();
    setSearchResults(initialResults);
  };

  //TODO: Right now, the select non-males input needs to be clicked
  //twice to register a change. I have no idea why, and it's very annoying.
  //Do not show this feature during the presentation. 
  return (
    <>
      <NavBar />
      <h2>Search</h2>
      <div id="searchForm">
        <label>
          Search for musicians with whom to jam
          <form onSubmit={handleSearch} onReset={handleReset}>
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
              <select
                id="genre"
                name="genre"
                onChange={handleChange}
              >
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
              <select
                id="skill"
                name="skill"
                onChange={handleChange}
              >
                <option value="amateur">Amateur</option>
                <option value="professional">Professional</option>
              </select>
            </label><br/>
            <label>Location:
              <input
                type="text"
                name="location"
                placeholder="NYC, LA, Outer space"
                onChange={handleChange}
              />
            </label><br/>
            <label>Only show non-men
              <input
                type="checkbox"
                id="gender"
                name="gender"
                onChange={handleChange}
              />
            </label><br/>
            <input type="submit" value="Search" />
            <input type="reset" value="Reset" />
          </form>
        </label>
      </div>
      {searchResults.map((result, i) => (
        <SearchResult
          key={`searchResult${i}`}
          {...result}
        />
      ))}
      {(initialResults && !searchResults) && (
        <div>
          No musicians found based on your criteria. Bummer!
        </div>
      )}
      {!initialResults && (
        <div>
          Loading musicians, please wait ...
        </div>
      )}
    </>
  )
};

export default Search;
