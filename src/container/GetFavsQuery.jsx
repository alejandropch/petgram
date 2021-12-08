import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { ListOfFavs } from '../components/ListOfFavs'
const GET_FAVS_PHOTO = gql`
    query getFavs {
        favs {
          id
          categoryId
          src
          likes
          userId
        }
      }
    `
export const GetFavsQuery = () => {
  const { loading, error, data } = useQuery(GET_FAVS_PHOTO)
  console.log(error)
  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>Server error, we are fixing it:)</h2>
  const { favs } = data

  console.log(favs)
  return <ListOfFavs list={favs} />
}
