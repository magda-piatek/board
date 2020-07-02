import {getAuth} from './AuthService'

export const getHeaders = () => {
  return {
    'Content-Type': 'application/json',
    Authorization: getAuth().token,
  }
}

export const userApi = (id?: String) => {
  return {
    post: '/api/users/register',
    getMe: '/api/users/getMe',
    getOne: '/api/users/' + id,
  }
}

export const loginApi = () => {
  return {post: '/api/auth'}
}
