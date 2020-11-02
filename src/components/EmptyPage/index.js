import React from 'react'
import { Container } from './styles'
import noFavoritesImage from '../../images/corgi-cute.png'

export const EmptyPage = ({ text }) => {
  return (
    <>
      <Container>
        <img src={noFavoritesImage} alt='No Favorites Availables' width='200' />
        <h3>{text}</h3>
      </Container>
    </>
  )
}
