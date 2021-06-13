import React, { useState } from 'react';

// TODO: link to profile
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

  const showOrHideBio = () => {
    setIsBioShowing(!isBioShowing);
  };
  debugger
  return (
    <div>
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
      <button onClick={showOrHideBio}>{isBioShowing ? 'Show less information' : 'Show more information'}</button>
    </div>
  )
};

export default SearchResult;
