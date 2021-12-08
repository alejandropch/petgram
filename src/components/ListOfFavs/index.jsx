import React, { PureComponent } from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfFavs = ({ list }) => {
  return (
    list.map(item => (
      <PhotoCard key={item} {...item} />
    )

    )
  )
}
