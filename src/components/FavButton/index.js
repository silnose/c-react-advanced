import React from 'react'
import { PropTypes } from 'prop-types'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { Button } from './style.js'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (
    <>
      <Button onClick={onClick}>
        <Icon size='30px' /> {likes} Likes!
      </Button>
    </>
  )
}
FavButton.propTypes = {
  liked: PropTypes.bool,
  likes: PropTypes.number,
  onClick: PropTypes.func.isRequired
}
