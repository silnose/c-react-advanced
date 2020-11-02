import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetPhotos } from '../../hooks/useGetPhotos.js'
import { List, Item } from './style.js'
import { PropTypes } from 'prop-types'
import { Loading } from '../Loading'

export const ListOfPhotoCard = ({ categoryID }) => {
  const { loading, error, data } = useGetPhotos(categoryID)

  if (error) {
    return <h1>Opps! something is wrong :(</h1>
  }

  if (loading) {
    return <Loading />
  }
  return (
    <>
      {
        <List>
          {data.photos.map((photoCard) => (
            <Item key={photoCard.id}>
              <PhotoCard {...photoCard} />
            </Item>
          ))}
        </List>
      }
    </>
  )
}

// ListOfPhotoCard.propTypes = {
//   categoryID: PropTypes.string
// }
