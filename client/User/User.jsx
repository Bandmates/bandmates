import React, { useState, useEffect } from 'react';

import NavBar from '../NavBar/NavBar';

const User = ({ id }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //!TODO: hook up fetch once everything is set up
    // fetch('/users/:id')
    //   .then(res => res.json())
    //   .then(data => {
    //     setUser(data);
    //   });
  }, []);

  if (!user) {
    return (
      <>
        <NavBar />
        <div>
          Loading user ...
        </div>
      </>
    )
  }

  const {
    username,
    email,
    instruments,
    genres,
    gender,
    age,
    location,
    bio,
    skillLevel,
  } = user;

  return (
    <>
      <NavBar />
      <h1>USER PROFILE</h1>
      <div>{username}</div>
      <div>{instruments}</div>
      <div>{genres}</div>
      <div>{skillLevel}</div>
      <div>{age} years old, {gender}, located in {location}</div>
      <div>{bio}</div>
      <div>{email}</div>
    </>
  )
};

export default User;
