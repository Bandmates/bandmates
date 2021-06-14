import React, { useState } from 'react';

/*

The SearchResult component receives its props from the 
Search component. In the Search component, the user's 
values are spread (...) into SearchResults. 
skill_level is renamed as skillLevel to comply with
JavaScript naming conventions. 
The state isBioShowing is used to indicate whether or
not additional information about a user (bio, email)
should be shown. 

FUTURE IMPLEMENTATIONS:
- rather than display all the information about the user
in the search result, a future implementation should
provide a Link (via React Router) to /users/:id. 

*/

const SearchResult = ({
  name,
  location,
  instruments,
  skill_level: skillLevel,
  genres,
  bio,
  email,
  gender,
}) => {
  const [isBioShowing, setIsBioShowing] = useState(false);
  const toggleBio = () => setIsBioShowing(!isBioShowing);

  return (
    <div className="searchResult">
      <div>Name: {name}</div>
      <div>Location: {location}</div>
      <div>Skill level: {skillLevel}</div>
      <div>Instruments: {instruments}</div>
      <div>Genres: {genres}</div>
      <div>Gender: {gender}</div>
      {isBioShowing && (
        <>
          <div>
            {bio}
          </div>
          <div>
            Contact: {email}
          </div>
        </>
      )}
      <button onClick={toggleBio}>
        {isBioShowing ? 'Show less information' : 'Show more information'}
      </button>
    </div>
  )
};

export default SearchResult;
