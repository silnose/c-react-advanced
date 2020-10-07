import React from 'react'
import { FavButton } from '../FavButton/'
import { Image, ImgWrapper, Card } from './style.js'
import { useLocalStorage } from '../../hooks/useLocalStorage.js'
import { useLikePhoto } from '../../hooks/useLikePhoto.js'
import { useNearScreen } from '../../hooks/useNearScreen.js'
import { Link } from '@reach/router'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const LIKE_LOCAL_STORAGE_KEY = `like ${id}`
  const [liked, setLiked] = useLocalStorage(LIKE_LOCAL_STORAGE_KEY, false)
  const [show, element] = useNearScreen()
  const [toggleLike] = useLikePhoto()
  const handleFavButtonClick = () => {
    console.log(`id de la photo ${id}`)
    setLiked(!liked)
    toggleLike({ variables: { input: { id: id } } })
  }

  return (
    <>
      <Card ref={element}>
        {show && (
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Image src={src} alt='' />
              </ImgWrapper>
            </Link>
            <FavButton
              likes={likes}
              liked={liked}
              onClick={handleFavButtonClick}
            />
          </>
        )}
      </Card>
    </>
  )
}
