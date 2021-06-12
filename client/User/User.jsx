import React, { useState, useEffect } from 'react';

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
      <div>
        Loading user ...
      </div>
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
