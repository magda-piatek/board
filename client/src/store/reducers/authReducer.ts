import {LOGIN_SUCCESS, ActionTypes} from '../types/types'

import {Auth} from '../types/Auth'

const initialState: Auth = {
  token: '',
  isAuthenticated: false,
}

export default (state = initialState, action: ActionTypes): Auth => {
  const {type, payload} = action

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
      }

    default:
      return state
  }
}
