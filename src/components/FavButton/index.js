import React from 'react'
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
