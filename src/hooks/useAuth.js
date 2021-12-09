import { useState } from 'react'
export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })
  const aproveAuth = (token) => {
    window.sessionStorage.setItem('token', token)
    setIsAuth(true)
  }
  const logOut = ({ client }) => {
    setIsAuth(false)
    window.sessionStorage.removeItem('token')
    client.resetStore()
  }

  return {
    aproveAuth, logOut, isAuth
  }
}
