import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { List, Item } from './style.js'
export const ListOfPhotoCard = () => {
  return (
    <>
      <List>
        {
          [1, 2, 3, 4].map((photoCard) => (
            <Item key={photoCard}>
              <PhotoCard id={photoCard}/>
            </Item>
          ))
        }
      </List>
    </>
  )
}
