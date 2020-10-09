import React from 'react'
import { PropTypes } from 'prop-types'
import { PhotoCard } from '../PhotoCard/'
import { useGetSinglePhoto } from '../../hooks/useGetSinglePhoto.js'
import { Loading } from '../Loading'

export const PhotoDetail = ({ id }) => {
  const { loading, error, data } = useGetSinglePhoto(id)

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <h1>{error.message}</h1>
  }
  return (
    <>
      <PhotoCard {...data.photo} />
    </>
  )
}

PhotoDetail.propTypes = {
  id: PropTypes.string.isRequired
}
