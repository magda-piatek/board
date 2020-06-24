import {getAuth} from './AuthService'

export const getHeaders = () => {
  return {
    'Content-Type': 'application/json',
    Authorization: getAuth().token,
  }
}

export const userApi = () => {
  return {post: '/api/users/register', getMe: '/api/users/getMe'}
}

export const loginApi = () => {
  return {post: '/api/auth'}
}
