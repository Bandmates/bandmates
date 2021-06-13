import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const [errors, setErrors] = useState('');
  const handleLogIn = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    console.log(username, password);
    // TODO: do some sort of put request with the username and password to start a session. 
    // fetch();
  };

  return (
    <div className="signUpAndLogIn">
      <div id="signUpContainer">
        <h1>Bandmates</h1>
        {errors && (
          <div className="loginFields">
            {errors}
          </div>
        )}
        <form
          onSubmit={handleLogIn}>
          <input
            className="loginFields"
            type="text"
            id="username"
            name="username"
            placeholder="kenny@loggins.com"
          />
          <input
            className="loginFields"
            type="password"
            id="password"
            name="password"
            placeholder="SickPassword420"
          />
          <input
            className="loginFields"
            type="submit"
            value="Log In"
          />
        </form>
        <Link to="/signUp">
          <button className="loginFields">
            Don't have an account?
            Click here to sign up.
          </button>
        </Link>
      </div>
    </div>
  )
};

export default LogIn;
