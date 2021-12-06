import { useState } from 'react'

export const useRegister = () => {
  const [isAuth, setIsAuth] = useState(false)

  const aproveAuth = () => {
    setIsAuth(true)
  }
  const logOut = () => {
    setIsAuth(false)
  }

  return {
    aproveAuth, logOut, isAuth
  }
}
