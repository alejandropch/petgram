import React, { useContext } from 'react'
import { Context } from '../context/Context'
export const Profile = () => {
  const { logOut } = useContext(Context)
  return (
    <>
      <h1>Este es tu perfil</h1>
      <button onClick={logOut}>Log out</button>
    </>
  )
}
