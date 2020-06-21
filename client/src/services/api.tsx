export function getHeaders() {
  return {
    'Content-Type': 'application/json',
  }
}

export const userApi = () => {
  return {post: '/api/users/register'}
}

export const loginApi = () => {
  return {post: '/api/auth'}
}
