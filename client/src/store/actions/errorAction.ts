import {Error} from '../types/Error'
import {ActionTypes, ERROR_RECEIVED} from '../types/types'

export const setErrors = (error: Error): ActionTypes => ({
  type: ERROR_RECEIVED,
  payload: error,
})
