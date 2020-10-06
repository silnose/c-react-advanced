import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetPhotos } from '../../hooks/useGetPhotos.js'
import { List, Item } from './style.js'

export const ListOfPhotoCard = ({ categoryID }) => {
  const { loading, error, data } = useGetPhotos(categoryID)

  if (loading) {
    return <h1>Loading</h1>
  }

  if (error) {
    return <h1>{error.message}</h1>
  }
  return (
    <>
      <List>
        {data.photos.map((photoCard) => (
          <Item key={photoCard.id}>
            <PhotoCard {...photoCard} />
          </Item>
        ))}
      </List>
    </>
  )
}
