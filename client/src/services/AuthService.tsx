import {useSelector} from 'react-redux'

import {Auth} from '../store/types/Auth'

export const isAuthenticated = (): Boolean =>
  useSelector((state: {auth: Auth}) => state.auth.isAuthenticated)
