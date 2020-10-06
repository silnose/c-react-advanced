import React from 'react'
import { PhotoCard } from '../components/PhotoCard/'
import { useGetSinglePhoto } from '../hooks/useGetSinglePhoto.js'
export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useGetSinglePhoto(id)

  if (loading) {
    return 'loading'
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
