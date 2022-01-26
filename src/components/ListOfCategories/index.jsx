import React, { useState, useEffect } from 'react'
import { Category, CategorySkeleton } from '../Category'
import { List, Item } from './styles'
import { useCategoriesData } from '../../hooks/useCategoriesData'

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()

  const [showFixed, setShowFixed] = useState(false)

  const onScroll = (e) => {
    const newShowFixed = window.scrollY > 200

    // if the user is up to 200px, setShowFixed will be call with true as paramater and it will return a bool that is going to be compare with showFixed
    showFixed !== newShowFixed && setShowFixed(newShowFixed)
    // i can not use parentheses because it will ask for newShowFixed before is declarated
  }

  useEffect(() => {
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Item key='loading'><CategorySkeleton /></Item>
          : categories.map(category => (
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>
          ))
      }
    </List>
  )

  return (
    <>
      {renderList()}

      {showFixed && renderList(true)}

    </>

  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
