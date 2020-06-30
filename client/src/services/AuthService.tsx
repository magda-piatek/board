import {Auth} from '../store/types/Auth'
import {keys} from '../../../server/config/keys'
import {setAuth} from '../store/actions/authAction'

import {useSelector, useDispatch} from 'react-redux'

const jwt = require('jsonwebtoken')

export const getAuth = () => {
  const dispatch = useDispatch()

  let {token, isAuthenticated} = useSelector(
    (state: {auth: Auth}) => state.auth
  )

  const decoded = jwt.verify(token, keys.jwtSecret)

  if (decoded.exp - Date.now() / 1000 < 0) {
    isAuthenticated = false
    dispatch(setAuth({token: null, isAuthenticated: false}))
  }

  return {token, isAuthenticated}
}
