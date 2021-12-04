import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { PhotoCard } from '../components/PhotoCard'

const GET_SINGLE_PHOTO = gql`
    query getSinglePhoto($id:ID!) {
        photo(id:$id) {
          id
          categoryId
          src
          likes
          userId
          liked
        }
      }
    `
export function PhotoCardQuery ({ id }) {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: {
      id: id
    }
  })

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>Server error, we are fixing it:)</h2>

  return (

    <PhotoCard {...data.photo} />
  )
}
