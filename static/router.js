import React, { Component, PropTypes } from 'react'
import { Redirect } from 'react-router'
import {
  BrowserRouter as Router,
  Route,
  history,
  Link
} from 'react-router-dom';

import Media from './component/media';

const Home = () => (
  <div>Home</div>
);
const Login = () => (
  <div>Login</div>
);

const Root = () => (
  <Router>
    <div style={{ height: '100%' }}>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/media" component={Media}/>
    </div>
  </Router>
)

export default Root;
