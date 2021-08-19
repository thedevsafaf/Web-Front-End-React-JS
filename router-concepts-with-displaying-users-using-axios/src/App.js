import React, { Component } from 'react';
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Router Setup
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from './components/screens/includes/Nav';
import Home from './components/screens/Home';
import About from './components/screens/About';
import Contact from './components/screens/Contact';
import Users from './components/screens/Users';
import User from './components/screens/User';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/users" component={Users} />
          <Route path="/user/:id" component={User} />
        </Switch>
      </Router>
    )
  }
}

