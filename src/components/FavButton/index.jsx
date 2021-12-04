import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles.js'

export function FavButton ({ liked, likes, onClick }) {
  const Icon = liked === true ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size='32' />{likes} likes!
    </Button>
  )
}
