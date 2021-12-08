import React from 'react'
import { Grid, Image, Link } from './styles'

export const ListOfFavs = ({ list = [] }) => {
  return (
    <Grid>
      {
        list.map(item => (
          <Link key={item.id} to={`/detail/${item.id}`}>
            <Image src={item.src} />
          </Link>
        ))
      }
    </Grid>

  )
}
