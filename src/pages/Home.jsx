import React from 'react'
import { useParams } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

export const Home = () => {
  const params = useParams()
  return (
    <>

      <Helmet>
        <title>Feed | Petgram &#128062;</title>
        <meta name='description' content='In petgram you can many cute animal photos' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.id} />
    </>

  )
}
