import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Places from './components/screens/Places';
import Place from './components/screens/Place';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Places} />
          <Route path="/place/:id" component={Place} />
        </Switch>
      </Router>
    )
  }
}
