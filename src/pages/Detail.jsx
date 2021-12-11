import React from 'react'
import { PhotoCardQuery } from '../container/PhotoCardQuery'
import { useParams } from 'react-router-dom'
export default () => {
  const { detailid } = useParams()

  return (
    <>

      <PhotoCardQuery id={detailid} />
    </>
  )
}
