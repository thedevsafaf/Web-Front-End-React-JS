import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardSignup from './screens/CardSignup'
import CardLogin from './screens/CardLogin'
import CardForgotPass from './screens/CardForgotPass'
import PaymentCards from './screens/PaymentCards'


export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={CardSignup} />
          <Route path="/login" component={CardLogin} />
          <Route path="/forgot_password" component={CardForgotPass} />
          <Route path="/cards" component={PaymentCards} />
        </Switch>
      </Router>
    )
  }
}
