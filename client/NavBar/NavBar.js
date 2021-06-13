import React from 'react';
import { Link } from 'react-router-dom';

// TODO: change log out to actually log out a user
const NavBar = ({ id, username }) => {
  return (
    <div>
      <div>
        Hello, {username}!
      </div>
      <div>
        <Link to={`/users/${id}`}>View profile</Link>
      </div>
      <div>
        <Link to="/users">Search musicians</Link>
      </div>
      <div>
        <Link to="/logIn">Log out</Link>
      </div>
    </div>
  )
};

export default NavBar;
