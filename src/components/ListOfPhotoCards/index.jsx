import React from 'react'
import { ListContainer } from './styles'
import { PhotoCard } from '../PhotoCard'
import { GetPhotos } from '../../hoc/GetPhotos'

export const ListOfPhotoCards = (categoryId) => {
  const { data, loading, error } = GetPhotos(categoryId)

  if (error) {
    return <h2>Server error, we are fixing it:)</h2>
  }

  return (
    <ListContainer>
      {
        loading
          ? <h2>Loading</h2>
          : data.photos.map((card) => {
            return (
              <PhotoCard key={card.id} {...card} />
            )
          })
    }
    </ListContainer>
  )
}
