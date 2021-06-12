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
    <>
      {errors && (
        <div>
          {errors}
        </div>
      )}
      <label>
        Log in
        <form
          onSubmit={handleLogIn}>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="kenny@loggins.com"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="SickPassword420"
          />
          <input
            type="submit"
            value="Log In"
          />
        </form>
      </label>
      <Link to="/signUp">
        <button>
          Don't have an account?
          Click here to sign up.
        </button>
      </Link>
    </>
  )
};

export default LogIn;
