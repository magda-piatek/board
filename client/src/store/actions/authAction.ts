import {Auth} from '../types/Auth'
import {ActionTypes, LOGIN_SUCCESS} from '../types/types'

export const setAuth = (auth: Auth): ActionTypes => ({
  type: LOGIN_SUCCESS,
  payload: auth,
})
