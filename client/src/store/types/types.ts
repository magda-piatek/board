import {Auth} from './Auth'
import {Error} from './Error'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const ERROR_RECEIVED = 'ERROR_RECEIVED'

export interface LoginAction {
  type: typeof LOGIN_SUCCESS
  payload: Auth
}

export interface ErrorAction {
  type: typeof ERROR_RECEIVED
  payload: Error
}

export type ActionTypes = LoginAction | ErrorAction
