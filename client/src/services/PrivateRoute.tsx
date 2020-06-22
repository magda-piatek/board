import * as React from 'react'
import {Redirect, Route, RouteProps} from 'react-router-dom'

import {isAuthenticated} from './AuthService'

interface PrivateRouteProps extends RouteProps {
  component?: any
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const {component: Component, ...rest} = props
  const isAuth = isAuthenticated()

  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
