import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import User from './User/User';
import Search from './Search/Search';
import SignUp from './SignUp/SignUp';
import LogIn from './LogIn/LogIn';
import NavBar from './NavBar/NavBar';

const App = () => (
  <Router>
    <h1>Bandmates</h1>
    <Switch>
      <Route path="/" exact component={LogIn}/>
      <Route path="/logIn" component={LogIn}/>
      <Route path="/signUp" component={SignUp}/>
      <Route path="/users" component={Search}/>
    </Switch>
  </Router>
);

export default App;
