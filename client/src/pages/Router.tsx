import * as React from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginPage from './LoginPage'
import RegistrationPage from './RegistrationPage'

import Landing from './Landing'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/registration" component={RegistrationPage} />
        <Route exact path="/dashboard" component={Landing} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
