import React, { useState } from 'react';

const AGES = [];

for (let i = 18; i < 100; i++) {
  AGES.push(i);
}

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(18);
  const [instrument, setInstrument] = useState('vocals');
  const [genre, setGenre] = useState('rock');
  const [skill, setSkill] = useState('amateur');
  const [location, setLocation] = useState('');
  const [shouldExcludeMen, setShouldExcludeMen] = useState(false);
  const [errors, setErrors] = useState('');

  const labelToSetState = {
    username: setUsername,
    password: setPassword,
    age: setAge,
    instruments: setInstrument,
    genre: setGenre,
    skill: setSkill,
    gender: setShouldExcludeMen,
    location: setLocation,
  };

  const handleChange = e => {
    e.preventDefault();
    console.log(e.target);
    const { name, target } = e.target.value;
    const updateState = labelToSetState[name];
    updateState(target);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const user = {
      username,
      password,
      age,
      instrument,
      genre,
      skill,
      location,
      shouldExcludeMen,
    };

    //TODO: make a post request to create user
    // fetch('/users')
    //   .then(res => res.json())
    //   .then(data => setSearchResults(data))
    //   .catch(err => setErrors(err));
  };

  return (
    <>
      <h2>Sign Up</h2>
      {errors && (
        <div>{errors}</div>
      )}
      <div id="searchForm">
        <label>
          Create an account and find some bandmates!
          <form onSubmit={handleSubmit}>
            <label for="username">
              Username:
              <input
                type="text"
                id="username"
                name="username"
                placeholder="kenny@loggins.com"
                onChange={handleChange}
              />
            </label>
            <br/>
            <label for="password">
              Password:
              <input
                type="password"
                id="password"
                name="password"
                placeholder="SickPassword420"
                onChange={handleChange}
              />
            </label>
            <br/>
            <label for="instruments">
              Choose an instrument:
              <select
                id="instruments"
                name="instruments"
                onChange={handleChange}
                multiple
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
            <br/>
            <label for="genre">
              Choose a genres:
              <select
                id="genre"
                name="genre"
                onChange={handleChange}
                multiple
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
            <br/>
            <label for="skill">
              Skill level:
              <select
                id="skill"
                name="skill"
                onChange={handleChange}
              >
                <option value="amateur">Amateur</option>
                <option value="professional">Professional</option>
              </select>
            </label>
            <br/>
            <label>
              Location:
              <input
                type="text"
                name="location"
                placeholder="Your own private Idaho"
                onChange={handleChange}
              />
            </label>
            <br/>
            <label for="age">
              Age:
              <select
                id="age"
                name="age"
                onChange={handleChange}
              >
                {AGES.map(age => (
                  <option value={age}>{age}</option>
                ))}
              </select>
            </label>
            <br/>
            <input type="submit" value="Sign Up" />
          </form>
        </label>
      </div>
    </>
  )
};

export default SignUp;
