import React from 'react'
import { Link, Image, ContainerCategorySkeleton, CategoryImage, CategoryTitle } from './styles'

export const Category = ({ cover, path, emoji }) => (

  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
)
export const CategorySkeleton = props => {
  return (

    [1, 2, 3, 4, 5, 6].map(key => (
      <ContainerCategorySkeleton key={key}>
        <CategoryImage light={props.light} />
        <CategoryTitle light={props.light} />
      </ContainerCategorySkeleton>
    ))
  )
}
