import * as React from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginPage from './LoginPage'
import RegistrationPage from './RegistrationPage'

import Landing from './Landing'
import PrivateRoute from '../services/PrivateRoute'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/registration" component={RegistrationPage} />
        <PrivateRoute path="/dashboard" exact component={Landing} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
