import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Cities from '../src/Cities'
import City from '../src/City';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Cities} />
                    <Route path="/city/:id/" component={City} />
                </Switch>
            </Router>
        )
    }
}