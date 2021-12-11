import React, { useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import { ListOfFavs } from '../components/ListOfFavs'
import { Layout } from '../components/Layout'
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

export default () => {
  const { loading, error, data, refetch } = useQuery(GET_FAVS_PHOTO)
  useEffect(() => refetch(), [])
  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>Server error, we are fixing it:)</h2>
  const { favs } = data

  return (
    <Layout title='Favorities' subtitle='Your petgram favorities photos'>

      <ListOfFavs list={favs} />
    </Layout>
  )
}
