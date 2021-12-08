import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import { Article, ImgWrapper, Img } from './styles.js'
import { useNearScreen } from '../../hooks/useNearScreen'

import { FavButton } from '../FavButton'
import { useToggleLikeMutation } from '../../hooks/useToggleLikeMutation'
import { Link } from 'react-router-dom'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const { isAuth } = useContext(Context)
  const [show, element] = useNearScreen()

  const [mutation] = useToggleLikeMutation()

  const handleLikeClick = () => {
    mutation({
      variables: {
        input: { id },
        authorization:
        window.sessionStorage.getItem('token')
      },
      authorization:
        window.sessionStorage.getItem('token')

    })
  }

  return (
    <Article key={id} ref={element}>

      {

        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <FavButton likes={likes} liked={liked} onClick={isAuth ? handleLikeClick : null} />
          </>

      }

    </Article>
  )
}
