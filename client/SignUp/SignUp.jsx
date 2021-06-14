import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

//TODO: figure out how to select multiple values and store them in state
// Because of this issue, right now a user signing up via our sign up
// form can only select one instrument and one genre. 
//! https://stackoverflow.com/questions/30190588/html-select-multiple-as-dropdown
const SignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [instruments, setInstrument] = useState('vocals');
  const [genres, setGenre] = useState('rock');
  const [skill, setSkill] = useState('amateur');
  const [location, setLocation] = useState('');
  const [gender, setGender] = useState('Woman');
  const [errors, setErrors] = useState('');
  const [email, setEmail] = useState('');
  const [didSignUp, setDidSignUp] = useState(false);

  const labelToSetState = {
    username: setUsername,
    password: setPassword,
    birthdate: setBirthdate,
    instruments: setInstrument,
    genres: setGenre,
    skill: setSkill,
    location: setLocation,
    email: setEmail,
    gender: setGender,
    name: setName,
  };

  const handleChange = e => {
    e.preventDefault();
    let { name, value } = e.target;
    const updateState = labelToSetState[name];
    updateState(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const user = {
      name,
      username,
      email,
      password,
      instruments,
      genres,
      skill,
      location,
      birthdate,
      gender,
    };

    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(() => {
      setDidSignUp(true);
    }).catch(err => setErrors(err));
  };

  // This logic is redirecting to the Search component
  // when someone logs in. 
  let history = useHistory();
  if (didSignUp) history.push('/users');
  
  return (
    <div className="signUpAndLogIn">
      <div id="signUpContainer">
        <h1>Sign Up</h1>
        {errors && (
          <div>{errors}</div>
        )}
        <div>Create an account and find some bandmates!</div>
        <Link to="/logIn">
          <button className="loginFields">
            Already have an account?
            Click here to log in.
          </button>
        </Link>
        <div id="signUpForm">
          <label>
            <form onSubmit={handleSubmit}>
              <input
                className="loginFields"
                type="text"
                id="name"
                name="name"
                placeholder="Craig Finn"
                onChange={handleChange}
              />
              <input
                className="loginFields"
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                onChange={handleChange}
              />
              <input
                className="loginFields"
                type="text"
                id="email"
                name="email"
                placeholder="kenny@loggins.com"
                onChange={handleChange}
              />
              <input
                className="loginFields"
                type="password"
                id="password"
                name="password"
                placeholder="SickPassword420"
                onChange={handleChange}
              />
              <label for="instruments">
                Choose an instrument:
                <select
                  id="instruments"
                  name="instruments"
                  onChange={handleChange}
                  multiple
                  className="loginFields"
                >
                  <option value="vocals">Vocals</option>
                  <option value="guitar">Guitar</option>
                  <option value="bass">Bass</option>
                  <option value="drum">Drums</option>
                  <option value="piano">Piano</option>
                  <option value="synth">Keyboard / Synth</option>
                  <option value="drumMachine">Drum Machine</option>
                  <option value="brass">Brass Instrument</option>
                  <option value="string">String Instrument</option>
                  <option value="percussion">Percussion</option>
                </select>
              </label>
              <label for="genre">
                Choose a genre:
                <select
                  id="genre"
                  name="genre"
                  onChange={handleChange}
                  multiple
                  className="loginFields"
                >
                  <option value="rock">Rock</option>
                  <option value="punk">Punk</option>
                  <option value="metal">Metal</option>
                  <option value="hipHop">Hip-Hop</option>
                  <option value="country">Country</option>
                  <option value="soul">Soul</option>
                  <option value="electronic">Electronic</option>
                  <option value="pop">Pop</option>
                  <option value="rnb">RnB / Neo-Soul</option>
                  <option value="reggae">Reggaeton</option>
                  <option value="folk">Folk</option>
                </select>
              </label>
              <select
                id="skill"
                name="skill"
                onChange={handleChange}
                className="loginFields"
              >
                <option selected>How hard can you shred?</option>
                <option value="amateur">Amateur</option>
                <option value="professional">Professional</option>
              </select>
              <select
                id="gender"
                name="gender"
                onChange={handleChange}
                className="loginFields"
              >
                <option selected>Pick a gender</option>
                <option value="Woman">Woman</option>
                <option value="Man">Man</option>
                <option value="Non-binary">Non-binary</option>
              </select>
              <input
                className="loginFields"
                type="text"
                name="location"
                placeholder="Location, location, location"
                onChange={handleChange}
              />
              <input
                className="loginFields"
                type="text"
                name="birthdate"
                placeholder="1979-08-31"
                onChange={handleChange}
              />
              <input type="submit" value="Sign Up" />
            </form>
          </label>
        </div>
      </div>
    </div>
  )
};

export default SignUp;
