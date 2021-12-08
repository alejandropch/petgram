import { useState } from 'react'

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const aproveAuth = (token) => {
    window.sessionStorage.setItem('token', token)
    setIsAuth(true)
  }
  const logOut = () => {
    setIsAuth(false)
    window.sessionStorage.removeItem('token')
  }

  return {
    aproveAuth, logOut, isAuth
  }
}
