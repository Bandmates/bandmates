import React from 'react';
import { Link } from 'react-router-dom';

// TODO: in the future, the NavBar should have
// information about the current user, and uses that
// to Link the user to their profile. This will be 
// accomplished with Redux and Auth. 
const NavBar = () => (
  <div>
    {/* <div>
      Hello, {username}!
    </div> */}
    {/* <div>
      <Link to={`/users/${id}`}>View profile</Link>
    </div> */}
    <div>
      <Link to="/users">Search musicians</Link>
    </div>
    <div>
      {/* TODO: clicking "Log out" should actually log a user out,
      not just redirect them to the logIn page.  */}
      <Link to="/logIn">Log out</Link>
    </div>
  </div>
);

export default NavBar;
