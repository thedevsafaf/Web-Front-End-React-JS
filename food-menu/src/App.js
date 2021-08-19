import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FoodItems from './FoodItems';
import FoodItem from './FoodItem';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={FoodItems} />
        <Route path='/:id/' component={FoodItem} />
      </Switch>
    </Router>
  );
}


