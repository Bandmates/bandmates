import React from 'react';

const NavBar = ({ id, username }) => {
  return (
    <div>
      <div>
        Hello, {username}!
      </div>
      <div>
        <a>View profile</a>
      </div>
      <div>
        <a>Search musicians</a>
      </div>
      <div>
        <a>Log out</a>
      </div>
    </div>
  )
};

export default NavBar;
