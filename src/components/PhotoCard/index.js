import React from 'react'
import { Image, Button, ImgWrapper, Card } from './style.js'
import { useLocalStorage } from '../../hooks/useLocalStorage.js'
import { useNearScreen } from '../../hooks/useNearScreen.js'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const LIKE_LOCAL_STORAGE_KEY = `like ${id}`
  const [liked, setLiked] = useLocalStorage(LIKE_LOCAL_STORAGE_KEY, false)
  const [show, element] = useNearScreen()
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <>
      <Card ref={element}>
        {show && (
          <>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Image src={src} alt='' />
              </ImgWrapper>
            </a>
            <Button onClick={() => setLiked(!liked)}>
              <Icon size='30px' /> {likes} Likes!
            </Button>
          </>
        )}
      </Card>
    </>
  )
}
