import {Error} from '../types/Error'
import {ActionTypes, ERROR_RECEIVED} from '../types/types'

export const setAuth = (error: Error): ActionTypes => ({
  type: ERROR_RECEIVED,
  payload: error,
})
