import React, { useState } from 'react';

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
    </>
  )
};

export default LogIn;
