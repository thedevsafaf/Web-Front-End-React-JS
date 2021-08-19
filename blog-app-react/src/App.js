import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Posts from './components/screens/Posts';
import Post from './components/screens/Post';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/post/:id/" component={Post} />
        </Switch>
      </Router>
    )
  }
}
