import {useSelector} from 'react-redux'

import {Auth} from '../store/types/Auth'

export const getAuth = () => {
  const {token, isAuthenticated} = useSelector(
    (state: {auth: Auth}) => state.auth
  )

  return {token, isAuthenticated}
}
