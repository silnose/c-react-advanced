import React, { useContext } from 'react'
import { Context } from '../../Context'
import { FavButton } from '../FavButton/'
import { Image, ImgWrapper, Card } from './style.js'
import {
  useLikePhotoAnonymous,
  useLikePhoto
} from '../../hooks/useLikePhoto.js'
import { useNearScreen } from '../../hooks/useNearScreen.js'
import { Link } from '@reach/router'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const { isAuth } = useContext(Context)
  const [show, element] = useNearScreen()
  const [toggleLikeAnonymous] = useLikePhotoAnonymous()
  const [toggleLike] = useLikePhoto()
  const handleFavButtonClick = () => {
    if (isAuth) {
      console.log('logueado')
      toggleLike({ variables: { input: { id: id } } })
    } else {
      console.log('no logueado')
      toggleLikeAnonymous({ variables: { input: { id: id } } })
    }
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
