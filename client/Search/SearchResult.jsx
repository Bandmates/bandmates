import React from 'react';

// TODO: link to profile
const SearchResult = ({
  id,
  username,
  age,
  location,
  instruments,
  skillLevel,
  genres,
}) => (
  <div>
    <div>{username}</div>
    <div>{location}</div>
    <div>{age}</div>
    <div>{skillLevel}</div>
    <div>{instruments}</div>
    <div>{genres}</div>
    <a>Link to profile</a>
  </div>
);

export default SearchResult;
