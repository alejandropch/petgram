import React from 'react'
import { GetFavsQuery } from '../container/GetFavsQuery'
import { PhotoCard } from '../components/PhotoCard'
export const Favs = () => {
  return (
    <>
      <h1>Estas son las fotos añadidas a fav</h1>
      <GetFavsQuery />
    </>
  )
}
