import * as React from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginPage from './LoginPage'
import RegistrationPage from './RegistrationPage'

import Landing from './Landing'
import PrivateRoute from '../services/PrivateRoute'
import ProfilePage from './ProfilePage'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/registration" component={RegistrationPage} />
        <PrivateRoute path="/dashboard" exact component={Landing} />
        <PrivateRoute path="/profile" exact component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
